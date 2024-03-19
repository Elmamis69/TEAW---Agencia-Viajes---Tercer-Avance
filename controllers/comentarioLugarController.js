const ComentarioLugarDAO = require('../dataAccess/comentarioLugarDAO');
const { AppError } = require('../utils/appError');

class ComentarioLugarController {
  static async obtenerComentariosPorIdResenaLugar(req, res, next) {
    try {
      const { idResenaLugar } = req.params;
      const comentarios = await ComentarioLugarDAO.obtenerComentariosPorIdResenaLugar(idResenaLugar);
      res.status(200).json(comentarios);
    } catch (error) {
      next(new AppError('Error al obtener comentarios del lugar', 500));
    }
  }

  static async obtenerComentarioLugarPorId(req, res, next) {
    try {
      const { id } = req.params;
      const comentario = await ComentarioLugarDAO.obtenerComentarioLugarPorId(id);
      if (!comentario) {
        return next(new AppError('Comentario de lugar no encontrado', 404));
      }
      res.status(200).json(comentario);
    } catch (error) {
      next(new AppError('Error al obtener el comentario de lugar', 500));
    }
  }

  static async crearComentarioLugar(req, res, next) {
    try {
      const { idResenaLugar, comentario, fecha } = req.body;
      const nuevoComentario = await ComentarioLugarDAO.crearComentarioLugar(idResenaLugar, comentario, fecha);
      res.status(201).json(nuevoComentario);
    } catch (error) {
      next(new AppError('Error al crear el comentario de lugar', 500));
    }
  }

  static async actualizarComentarioLugar(req, res, next) {
    try {
      const { id } = req.params;
      const nuevosDatos = req.body;
      const comentarioActualizado = await ComentarioLugarDAO.actualizarComentarioLugar(id, nuevosDatos);
      res.status(200).json(comentarioActualizado);
    } catch (error) {
      next(new AppError('Error al actualizar el comentario de lugar', 500));
    }
  }

  static async eliminarComentarioLugar(req, res, next) {
    try {
      const { id } = req.params;
      await ComentarioLugarDAO.eliminarComentarioLugar(id);
      res.status(200).json({ message: 'Comentario de lugar eliminado correctamente' });
    } catch (error) {
      next(new AppError('Error al eliminar el comentario de lugar', 500));
    }
  }
}

module.exports = ComentarioLugarController;
