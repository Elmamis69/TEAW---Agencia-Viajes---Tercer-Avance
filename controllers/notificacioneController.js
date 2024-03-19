const NotificacioneDAO = require('../dataAccess/notificacioneDAO');
const { AppError } = require('../utils/appError');

class NotificacioneController {
  static async obtenerTodasLasNotificaciones(req, res, next) {
    try {
      const notificaciones = await NotificacioneDAO.getAllNotificaciones();
      res.status(200).json(notificaciones);
    } catch (error) {
      next(new AppError('Error al obtener las notificaciones', 500));
    }
  }

  static async obtenerNotificacionPorId(req, res, next) {
    try {
      const { id } = req.params;
      const notificacion = await NotificacioneDAO.getNotificacionById(id);
      if (!notificacion) {
        return next(new AppError('Notificación no encontrada', 404));
      }
      res.status(200).json(notificacion);
    } catch (error) {
      next(new AppError('Error al obtener la notificación', 500));
    }
  }

  static async obtenerNotificacionesPorUsuarioId(req, res, next) {
    try {
      const { userId } = req.params;
      const notificaciones = await NotificacioneDAO.getNotificacionesByUserId(userId);
      res.status(200).json(notificaciones);
    } catch (error) {
      next(new AppError('Error al obtener las notificaciones del usuario', 500));
    }
  }

  static async crearNotificacion(req, res, next) {
    try {
      const notificacionData = req.body;
      const nuevaNotificacion = await NotificacioneDAO.createNotificacion(notificacionData);
      res.status(201).json(nuevaNotificacion);
    } catch (error) {
      next(new AppError('Error al crear la notificación', 500));
    }
  }

  static async actualizarNotificacion(req, res, next) {
    try {
      const { id } = req.params;
      const notificacionData = req.body;
      const notificacionActualizada = await NotificacioneDAO.updateNotificacion(id, notificacionData);
      res.status(200).json(notificacionActualizada);
    } catch (error) {
      next(new AppError('Error al actualizar la notificación', 500));
    }
  }

  static async eliminarNotificacion(req, res, next) {
    try {
      const { id } = req.params;
      await NotificacioneDAO.deleteNotificacion(id);
      res.status(200).json({ message: 'Notificación eliminada correctamente' });
    } catch (error) {
      next(new AppError('Error al eliminar la notificación', 500));
    }
  }
}

module.exports = NotificacioneController;
