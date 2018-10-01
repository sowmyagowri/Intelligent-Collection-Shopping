const express = require('express');
const bodyParser = require("body-parser");
const userController = require("./controllers/ICSUsersCntrl");
const path = require('path');

// db connection
//require("./config/user_db");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app
  .route("/users")
  .get(userController.listUsers)
  .post(userController.createUser);

// API calls
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From my ICS server' });
});

app.use('/users1', require('./ICSUserMgmt/ICSUserCntrl'));

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
