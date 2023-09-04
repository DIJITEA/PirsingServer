const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pirsingSchema = new Schema({
  name: String,
//   {
//     type: String,
//     required: true,
//   },
  curcollection: [{
    steel: String,
    curvalue: [{mm: Number, count:Number}],
    color: String
  }]
});

const Pirsing = mongoose.model('Pirsing', pirsingSchema);
module.exports = Pirsing;