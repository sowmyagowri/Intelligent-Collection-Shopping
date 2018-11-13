const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ICSUserSchema = new Schema({
  userId: {
    type: String,
    unique: true,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String
  },
  userPassword: {
    type: String,
    required: true
  },
  contactNumber: {
    type: String
  },
  userAddress: {
    type: String
  },
  profilePhoto: {
    type: String
  }
});

ICSUserSchema.set('toJSON', { virtuals: true });
module.exports = mongoose.model("ICSUsers1", ICSUserSchema);