const ComentarioItinerarioDAO = require('../dataAccess/comentarioItinerarioDAO');
const { AppError } = require('../utils/appError');

class ComentarioItinerarioController {
  static async obtenerComentariosPorIdItinerario(req, res, next) {
    try {
      const { idItinerario } = req.params;
      const comentarios = await ComentarioItinerarioDAO.obtenerComentariosPorIdItinerario(idItinerario);
      res.status(200).json(comentarios);
    } catch (error) {
      next(new AppError('Error al obtener comentarios del itinerario', 500));
    }
  }

  static async obtenerComentarioItinerarioPorId(req, res, next) {
    try {
      const { id } = req.params;
      const comentario = await ComentarioItinerarioDAO.obtenerComentarioItinerarioPorId(id);
      if (!comentario) {
        return next(new AppError('Comentario de itinerario no encontrado', 404));
      }
      res.status(200).json(comentario);
    } catch (error) {
      next(new AppError('Error al obtener el comentario de itinerario', 500));
    }
  }

  static async crearComentarioItinerario(req, res, next) {
    try {
      const { idItinerario, comentario, fecha } = req.body;
      const nuevoComentario = await ComentarioItinerarioDAO.crearComentarioItinerario(idItinerario, comentario, fecha);
      res.status(201).json(nuevoComentario);
    } catch (error) {
      next(new AppError('Error al crear el comentario de itinerario', 500));
    }
  }

  static async actualizarComentarioItinerario(req, res, next) {
    try {
      const { id } = req.params;
      const nuevosDatos = req.body;
      const comentarioActualizado = await ComentarioItinerarioDAO.actualizarComentarioItinerario(id, nuevosDatos);
      res.status(200).json(comentarioActualizado);
    } catch (error) {
      next(new AppError('Error al actualizar el comentario de itinerario', 500));
    }
  }

  static async eliminarComentarioItinerario(req, res, next) {
    try {
      const { id } = req.params;
      await ComentarioItinerarioDAO.eliminarComentarioItinerario(id);
      res.status(200).json({ message: 'Comentario de itinerario eliminado correctamente' });
    } catch (error) {
      next(new AppError('Error al eliminar el comentario de itinerario', 500));
    }
  }
}

module.exports = ComentarioItinerarioController;
