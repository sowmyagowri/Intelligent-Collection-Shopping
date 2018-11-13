const mongoose = require("mongoose");

const dbURI =
  "mongodb://admin:admin123@ds111718.mlab.com:11718/easybuy";

const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("User db connection established in config!");
  },
  err => {
    console.log("Error connecting User db : ", err);
  }
);

mongoose.Promise = global.Promise;

// require any models
require("./ICSUserModel");