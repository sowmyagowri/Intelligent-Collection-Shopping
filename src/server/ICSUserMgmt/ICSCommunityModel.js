const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ICSCommunitySchema = new Schema({
  userId: {
    type: String
  },
  name: {
    type: String
  },
  zip: {
    type: String
  }
});

ICSCommunitySchema.set('toJSON', { virtuals: true });
module.exports = mongoose.model("communities", ICSCommunitySchema);