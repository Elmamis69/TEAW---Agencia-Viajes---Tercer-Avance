const mongoose = require('mongoose');

const resenaLugarSchema = new mongoose.Schema({
  NombreLugar: {
    type: String,
    required: true
  },
  Calificacion: {
    type: Number,
    required: true
  },
  Fecha: {
    type: Date,
    default: Date.now
  },
  idUsuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  }
}, {
  timestamps: true
});

const ResenaLugar = mongoose.model('ResenaLugar', resenaLugarSchema);

module.exports = ResenaLugar;
