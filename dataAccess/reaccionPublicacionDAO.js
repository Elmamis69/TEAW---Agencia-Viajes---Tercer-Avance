const mongoose = require('mongoose');
const ReaccionPublicacion = require('./reaccionPublicacionSchema');

class ReaccionPublicacionDAO {
  async getAllReaccionPublicaciones() {
    return await ReaccionPublicacion.find({});
  }

  async getReaccionPublicacionById(id) {
    return await ReaccionPublicacion.findById(id);
  }

  async getReaccionPublicacionByPostId(postId) {
    return await ReaccionPublicacion.find({ idPublicacion: postId });
  }

  async getReaccionPublicacionByUserId(userId) {
    return await ReaccionPublicacion.find({ idUsuario: userId });
  }

  async createReaccionPublicacion(reaccionPublicacionData) {
    const reaccionPublicacion = new ReaccionPublicacion(reaccionPublicacionData);
    return await reaccionPublicacion.save();
  }

  async updateReaccionPublicacion(id, reaccionPublicacionData) {
    return await ReaccionPublicacion.findByIdAndUpdate(id, reaccionPublicacionData, { new: true });
  }

  async deleteReaccionPublicacion(id) {
    return await ReaccionPublicacion.findByIdAndDelete(id);
  }
}

module.exports = ReaccionPublicacionDAO;