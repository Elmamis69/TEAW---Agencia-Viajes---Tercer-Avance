const mongoose = require('mongoose');
const Notificacione = require('./notificacioneSchema');

class NotificacioneDAO {
  async getAllNotificaciones() {
    return await Notificacione.find({});
  }

  async getNotificacionById(id) {
    return await Notificacione.findById(id);
  }

  async getNotificacionesByUserId(userId) {
    return await Notificacione.find({ idUsuario: userId });
  }

  async createNotificacion(notificacionData) {
    const notificacion = new Notificacione(notificacionData);
    return await notificacion.save();
  }

  async updateNotificacion(id, notificacionData) {
    return await Notificacione.findByIdAndUpdate(id, notificacionData, { new: true });
  }

  async deleteNotificacion(id) {
    return await Notificacione.findByIdAndDelete(id);
  }
}

module.exports = NotificacioneDAO;