const mongoose = require('mongoose');
const ResenaLugar = require('./resenaLugarSchema');

class ResenaLugarDAO {
  async getAllResenasLugares() {
    return await ResenaLugar.find({});
  }

  async getResenaLugarById(id) {
    return await ResenaLugar.findById(id);
  }

  async getResenaLugarByPlaceName(placeName) {
    return await ResenaLugar.findOne({ NombreLugar: placeName });
  }

  async getResenaLugarByUserId(userId) {
    return await ResenaLugar.find({ idUsuario: userId });
  }

  async createResenaLugar(resenaLugarData) {
    const resenaLugar = new ResenaLugar(resenaLugarData);
    return await resenaLugar.save();
  }

  async updateResenaLugar(id, resenaLugarData) {
    return await ResenaLugar.findByIdAndUpdate(id, resenaLugarData, { new: true });
  }

  async deleteResenaLugar(id) {
    return await ResenaLugar.findByIdAndDelete(id);
  }

  async getAverageRatingByPlaceName(placeName) {
    const resenasLugares = await ResenaLugar.find({ NombreLugar: placeName });
    let totalRating = 0;

    resenasLugares.forEach((resena) => {
      totalRating += resena.Calificacion;
    });

    return totalRating / resenasLugares.length;
  }
}

module.exports = ResenaLugarDAO;