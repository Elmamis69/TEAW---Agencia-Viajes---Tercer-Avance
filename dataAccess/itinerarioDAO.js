const mongoose = require('mongoose');
const Itinerario = require('./itinerarioSchema');

class ItinerarioDAO {
  async getAllItinerarios() {
    return await Itinerario.find({});
  }

  async getItinerarioById(id) {
    return await Itinerario.findById(id);
  }

  async getItinerariosByViajeId(viajeId) {
    return await Itinerario.find({ VinculoDeViaje: viajeId });
  }

  async createItinerario(itinerarioData) {
    const itinerario = new Itinerario(itinerarioData);
    return await itinerario.save();
  }

  async updateItinerario(id, itinerarioData) {
    return await Itinerario.findByIdAndUpdate(id, itinerarioData, { new: true });
  }

  async deleteItinerario(id) {
    return await Itinerario.findByIdAndDelete(id);
  }
}

module.exports = ItinerarioDAO;