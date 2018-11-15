const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ICSPostSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  category: {
    type: String
  },
  quantity: {
    type: String,
  },
  price: {
    type: String
  },
  date: {
    type: Date
  },
  sold: {
    type: Boolean
  }
});

ICSPostSchema.set('toJSON', { virtuals: true });
module.exports = mongoose.model("userPosts", ICSPostSchema);