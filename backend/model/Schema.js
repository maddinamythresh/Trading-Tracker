const mongoose = require("mongoose");

const cryptoSchema = new mongoose.Schema({
    name: String,
    image: String,
    current_price: Number,
    price_change_percentage_24h: Number,
  });

  module.exports = mongoose.model("Crypto", cryptoSchema);