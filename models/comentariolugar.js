const mongoose = require('mongoose');

const comentarioLugarSchema = new mongoose.Schema({
  idResenaLugar: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ResenaLugar',
    required: true
  },
  comentario: {
    type: String,
    required: true
  },
  fecha: {
    type: Date,
    required: true
  }
});

const ComentarioLugar = mongoose.model('ComentarioLugar', comentarioLugarSchema);

module.exports = ComentarioLugar;
