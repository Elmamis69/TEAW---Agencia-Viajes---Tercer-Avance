const mongoose = require('mongoose');
const Horario = require('./horarioSchema');

class HorarioDAO {
  async getAllHorarios() {
    return await Horario.find({});
  }

  async getHorarioById(id) {
    return await Horario.findById(id);
  }

  async getHorariosByItinerarioId(itinerarioId) {
    return await Horario.find({ idItinerario: itinerarioId });
  }

  async createHorario(horarioData) {
    const horario = new Horario(horarioData);
    return await horario.save();
  }

  async updateHorario(id, horarioData) {
    return await Horario.findByIdAndUpdate(id, horarioData, { new: true });
  }

  async deleteHorario(id) {
    return await Horario.findByIdAndDelete(id);
  }
}

module.exports = HorarioDAO;