const mongoose = require('mongoose');
const Publicacion = require('./publicacionSchema');

class PublicacionDAO {
  async getAllPublicaciones() {
    return await Publicacion.find({});
  }

  async getPublicacionById(id) {
    return await Publicacion.findById(id);
  }

  async getPublicacionesByUserId(userId) {
    return await Publicacion.find({ idUsuario: userId });
  }

  async getPublicacionesByDestinoId(destinoId) {
    return await Publicacion.find({ idDestino: destinoId });
  }

  async createPublicacion(publicacionData) {
    const publicacion = new Publicacion(publicacionData);
    return await publicacion.save();
  }

  async updatePublicacion(id, publicacionData) {
    return await Publicacion.findByIdAndUpdate(id, publicacionData, { new: true });
  }

  async deletePublicacion(id) {
    return await Publicacion.findByIdAndDelete(id);
  }
}

module.exports = PublicacionDAO;