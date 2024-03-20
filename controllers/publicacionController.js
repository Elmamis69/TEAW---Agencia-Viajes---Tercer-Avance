const PublicacionDAO = require('../dataAccess/publicacionDAO');
const { AppError } = require('../utils/appError');

class PublicacionController {
  static async obtenerTodasLasPublicaciones(req, res, next) {
    try {
      const publicaciones = await PublicacionDAO.getAllPublicaciones();
      res.status(200).json(publicaciones);
    } catch (error) {
      next(new AppError('Error al obtener las publicaciones', 500));
    }
  }

  static async obtenerPublicacionPorId(req, res, next) {
    try {
      const { id } = req.params;
      const publicacion = await PublicacionDAO.getPublicacionById(id);
      if (!publicacion) {
        return next(new AppError('Publicación no encontrada', 404));
      }
      res.status(200).json(publicacion);
    } catch (error) {
      next(new AppError('Error al obtener la publicación', 500));
    }
  }

  static async obtenerPublicacionesPorUsuario(req, res, next) {
    try {
      const { userId } = req.params;
      const publicaciones = await PublicacionDAO.getPublicacionesByUserId(userId);
      res.status(200).json(publicaciones);
    } catch (error) {
      next(new AppError('Error al obtener las publicaciones del usuario', 500));
    }
  }

  static async obtenerPublicacionesPorDestino(req, res, next) {
    try {
      const { destinoId } = req.params;
      const publicaciones = await PublicacionDAO.getPublicacionesByDestinoId(destinoId);
      res.status(200).json(publicaciones);
    } catch (error) {
      next(new AppError('Error al obtener las publicaciones del destino', 500));
    }
  }

  static async crearPublicacion(req, res, next) {
    try {
      const publicacionData = req.body;
      const publicacionCreada = await PublicacionDAO.createPublicacion(publicacionData);
      res.status(201).json(publicacionCreada);
    } catch (error) {
      next(new AppError('Error al crear la publicación', 500));
    }
  }

  static async actualizarPublicacion(req, res, next) {
    try {
      const { id } = req.params;
      const publicacionData = req.body;
      const publicacionActualizada = await PublicacionDAO.updatePublicacion(id, publicacionData);
      res.status(200).json(publicacionActualizada);
    } catch (error) {
      next(new AppError('Error al actualizar la publicación', 500));
    }
  }

  static async eliminarPublicacion(req, res, next) {
    try {
      const { id } = req.params;
      await PublicacionDAO.deletePublicacion(id);
      res.status(200).json({ message: 'Publicación eliminada correctamente' });
    } catch (error) {
      next(new AppError('Error al eliminar la publicación', 500));
    }
  }
}

module.exports = PublicacionController;
