const mongoose = require("mongoose");

const dbURI =
  "mongodb+srv://harshadab:harshadab@cluster0-23qcr.gcp.mongodb.net/test?retryWrites=true";

const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("User db connection established!");
  },
  err => {
    console.log("Error connecting User db : ", err);
  }
);

// require any models

require("../models/ICSUser");
