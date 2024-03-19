const mongoose = require('mongoose');

const notificacioneSchema = new mongoose.Schema({
  tipoActividad: {
    type: String,
    required: true
  },
  idUsuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  Fecha: {
    type: Date,
    required: true
  }
}, {
  timestamps: true
});

const Notificacione = mongoose.model('Notificacione', notificacioneSchema);

module.exports = Notificacione;
