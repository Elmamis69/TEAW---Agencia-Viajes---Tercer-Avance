const mongoose = require('mongoose');

const fotosDestinoSchema = new mongoose.Schema({
  idDestino: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Destino'
  },
  foto: {
    type: String,
    required: true
  }
});

const FotosDestino = mongoose.model('FotosDestino', fotosDestinoSchema);

module.exports = FotosDestino;
