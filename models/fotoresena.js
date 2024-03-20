const mongoose = require('mongoose');

const fotoResenaSchema = new mongoose.Schema({
  idResena: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ResenaLugar'
  },
  Foto: {
    type: String,
    required: true
  }
});

const FotoResena = mongoose.model('FotoResena', fotoResenaSchema);

module.exports = FotoResena;
