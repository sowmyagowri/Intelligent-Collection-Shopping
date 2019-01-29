const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');

// db connection
var mongoose = require('mongoose');

// replace the uri string with your connection string.
const connStr = "mongodb://admin:admin123@ds111718.mlab.com:11718/easybuy"
mongoose.connect(connStr, { useNewUrlParser: true}, function(err) {
  if (err) throw err;
  else {
      console.log('Successfully connected to MongoDB');
  }
});

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API calls
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From my ICS server' });
});

app.use('/users1', require('./ICSUserMgmt/ICSUserCntrl'));
app.use('/products', require('./ICSUserMgmt/ICSProductCntrl'));
app.use('/posts', require('./ICSUserMgmt/ICSPostCntrl'));

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));