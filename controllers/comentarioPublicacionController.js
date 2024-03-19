const ComentarioPublicacionDAO = require('../dataAccess/comentarioPublicacionDAO');
const { AppError } = require('../utils/appError');

class ComentarioPublicacionController {
  static async obtenerComentariosPorIdPublicacion(req, res, next) {
    try {
      const { idPublicacion } = req.params;
      const comentarios = await ComentarioPublicacionDAO.obtenerComentariosPorIdPublicacion(idPublicacion);
      res.status(200).json(comentarios);
    } catch (error) {
      next(new AppError('Error al obtener comentarios de la publicación', 500));
    }
  }

  static async obtenerComentarioPublicacionPorId(req, res, next) {
    try {
      const { id } = req.params;
      const comentario = await ComentarioPublicacionDAO.obtenerComentarioPublicacionPorId(id);
      if (!comentario) {
        return next(new AppError('Comentario de publicación no encontrado', 404));
      }
      res.status(200).json(comentario);
    } catch (error) {
      next(new AppError('Error al obtener el comentario de publicación', 500));
    }
  }

  static async crearComentarioPublicacion(req, res, next) {
    try {
      const { idPublicacion, comentario } = req.body;
      const nuevoComentario = await ComentarioPublicacionDAO.crearComentarioPublicacion(idPublicacion, comentario);
      res.status(201).json(nuevoComentario);
    } catch (error) {
      next(new AppError('Error al crear el comentario de publicación', 500));
    }
  }

  static async actualizarComentarioPublicacion(req, res, next) {
    try {
      const { id } = req.params;
      const { comentario } = req.body;
      const comentarioActualizado = await ComentarioPublicacionDAO.actualizarComentarioPublicacion(id, comentario);
      res.status(200).json(comentarioActualizado);
    } catch (error) {
      next(new AppError('Error al actualizar el comentario de publicación', 500));
    }
  }

  static async eliminarComentarioPublicacion(req, res, next) {
    try {
      const { id } = req.params;
      await ComentarioPublicacionDAO.eliminarComentarioPublicacion(id);
      res.status(200).json({ message: 'Comentario de publicación eliminado correctamente' });
    } catch (error) {
      next(new AppError('Error al eliminar el comentario de publicación', 500));
    }
  }
}

module.exports = ComentarioPublicacionController;
