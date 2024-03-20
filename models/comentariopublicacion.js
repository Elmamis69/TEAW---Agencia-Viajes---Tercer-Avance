const mongoose = require('mongoose');

const comentarioPublicacionSchema = new mongoose.Schema({
  idPublicacion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Publicacion'
  },
  Comentario: {
    type: String,
    required: true
  },
  fecha: {
    type: Date,
    default: Date.now
  }
});

const ComentarioPublicacion = mongoose.model('ComentarioPublicacion', comentarioPublicacionSchema);

module.exports = ComentarioPublicacion;
