const mongoose = require('mongoose');

const reaccionPublicacionSchema = new mongoose.Schema({
  idPublicacion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Publicacion',
    required: true
  },
  tipo: {
    type: String,
    required: true
  },
  idUsuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  }
}, {
  timestamps: true
});

const ReaccionPublicacion = mongoose.model('ReaccionPublicacion', reaccionPublicacionSchema);

module.exports = ReaccionPublicacion;
