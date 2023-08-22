const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId, 
  name: String,
  description: String,
  category: String,
  quantity: Number,
});

module.exports = mongoose.model('Item', itemSchema);
