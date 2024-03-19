const mongoose = require('mongoose');

const comentarioItinerarioSchema = new mongoose.Schema({
  idItinerario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Itinerario',
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

const ComentarioItinerario = mongoose.model('ComentarioItinerario', comentarioItinerarioSchema);

module.exports = ComentarioItinerario;
