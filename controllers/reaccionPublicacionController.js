const ReaccionPublicacionDAO = require('../dataAccess/reaccionPublicacionDAO');
const { AppError } = require('../utils/appError');

class ReaccionPublicacionController {
  static async obtenerTodasLasReaccionesPublicaciones(req, res, next) {
    try {
      const reacciones = await ReaccionPublicacionDAO.getAllReaccionPublicaciones();
      res.status(200).json(reacciones);
    } catch (error) {
      next(new AppError('Error al obtener las reacciones de publicaciones', 500));
    }
  }

  static async obtenerReaccionPublicacionPorId(req, res, next) {
    try {
      const { id } = req.params;
      const reaccion = await ReaccionPublicacionDAO.getReaccionPublicacionById(id);
      if (!reaccion) {
        return next(new AppError('Reacción de publicación no encontrada', 404));
      }
      res.status(200).json(reaccion);
    } catch (error) {
      next(new AppError('Error al obtener la reacción de publicación', 500));
    }
  }

  static async obtenerReaccionesPublicacionPorPostId(req, res, next) {
    try {
      const { postId } = req.params;
      const reacciones = await ReaccionPublicacionDAO.getReaccionPublicacionByPostId(postId);
      res.status(200).json(reacciones);
    } catch (error) {
      next(new AppError('Error al obtener las reacciones de la publicación', 500));
    }
  }

  static async obtenerReaccionesPublicacionPorUsuarioId(req, res, next) {
    try {
      const { userId } = req.params;
      const reacciones = await ReaccionPublicacionDAO.getReaccionPublicacionByUserId(userId);
      res.status(200).json(reacciones);
    } catch (error) {
      next(new AppError('Error al obtener las reacciones del usuario', 500));
    }
  }

  static async crearReaccionPublicacion(req, res, next) {
    try {
      const reaccionPublicacionData = req.body;
      const nuevaReaccion = await ReaccionPublicacionDAO.createReaccionPublicacion(reaccionPublicacionData);
      res.status(201).json(nuevaReaccion);
    } catch (error) {
      next(new AppError('Error al crear la reacción de la publicación', 500));
    }
  }

  static async actualizarReaccionPublicacion(req, res, next) {
    try {
      const { id } = req.params;
      const reaccionPublicacionData = req.body;
      const reaccionActualizada = await ReaccionPublicacionDAO.updateReaccionPublicacion(id, reaccionPublicacionData);
      res.status(200).json(reaccionActualizada);
    } catch (error) {
      next(new AppError('Error al actualizar la reacción de la publicación', 500));
    }
  }

  static async eliminarReaccionPublicacion(req, res, next) {
    try {
      const { id } = req.params;
      await ReaccionPublicacionDAO.deleteReaccionPublicacion(id);
      res.status(200).json({ message: 'Reacción de publicación eliminada correctamente' });
    } catch (error) {
      next(new AppError('Error al eliminar la reacción de la publicación', 500));
    }
  }
}

module.exports = ReaccionPublicacionController;
