const mongoose = require('mongoose');

const itinerarioSchema = new mongoose.Schema({
  lugaresEspecificos: {
    type: String,
    required: true
  },
  VinculoDeViaje: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const Itinerario = mongoose.model('Itinerario', itinerarioSchema);

module.exports = Itinerario;
