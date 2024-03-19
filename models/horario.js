const mongoose = require('mongoose');

const horarioSchema = new mongoose.Schema({
  idItinerario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Itinerario'
  },
  horarioActividad: {
    type: String,
    required: true
  },
  descripcion: {
    type: String
  }
});

const Horario = mongoose.model('Horario', horarioSchema);

module.exports = Horario;
