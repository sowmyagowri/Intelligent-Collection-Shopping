const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ICSProductSchema = new Schema({
  productName: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  uploadDate: {
    type: Date
  },
  sellerUserId: {
    type: String,
    required: true
  },
  buyerUserId: {
    type: String
  },
  soldFlag: {
    type: String,
    default: 'n'
  },
  zipcode: {
    type: String
  },
  buyDate: {
    type: Date
  },
  picture: {
    type:String
  }
});

ICSProductSchema.set('toJSON', { virtuals: true });
module.exports = mongoose.model("products", ICSProductSchema);