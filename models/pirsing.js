const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pirsingSchema = new Schema({
  typeName: String,
  steel: String,
  mm: Number,
  count: Number,
  color: String,
});

const Pirsing = mongoose.model("Pirsing", pirsingSchema);
module.exports = Pirsing;
