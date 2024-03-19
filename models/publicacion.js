const mongoose = require('mongoose');

const publicacionSchema = new mongoose.Schema({
  contenido: {
    type: String,
    required: true
  },
  fecha: {
    type: Date,
    default: Date.now
  },
  idUsuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  idDestino: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Destino',
    required: true
  }
});

const Publicacion = mongoose.model('Publicacion', publicacionSchema);

module.exports = Publicacion;
