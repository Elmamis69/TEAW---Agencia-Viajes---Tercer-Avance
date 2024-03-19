const ResenaLugarDAO = require('../dataAccess/resenaLugarDAO');
const { AppError } = require('../utils/appError');

class ResenaLugarController {
  static async obtenerTodasLasResenasLugares(req, res, next) {
    try {
      const resenas = await ResenaLugarDAO.getAllResenasLugares();
      res.status(200).json(resenas);
    } catch (error) {
      next(new AppError('Error al obtener las reseñas de lugares', 500));
    }
  }

  static async obtenerResenaLugarPorId(req, res, next) {
    try {
      const { id } = req.params;
      const resena = await ResenaLugarDAO.getResenaLugarById(id);
      if (!resena) {
        return next(new AppError('Reseña de lugar no encontrada', 404));
      }
      res.status(200).json(resena);
    } catch (error) {
      next(new AppError('Error al obtener la reseña de lugar', 500));
    }
  }

  static async obtenerResenaLugarPorNombreLugar(req, res, next) {
    try {
      const { placeName } = req.params;
      const resena = await ResenaLugarDAO.getResenaLugarByPlaceName(placeName);
      if (!resena) {
        return next(new AppError('Reseña de lugar no encontrada', 404));
      }
      res.status(200).json(resena);
    } catch (error) {
      next(new AppError('Error al obtener la reseña de lugar', 500));
    }
  }

  static async obtenerResenasLugarPorUsuarioId(req, res, next) {
    try {
      const { userId } = req.params;
      const resenas = await ResenaLugarDAO.getResenaLugarByUserId(userId);
      res.status(200).json(resenas);
    } catch (error) {
      next(new AppError('Error al obtener las reseñas del usuario', 500));
    }
  }

  static async crearResenaLugar(req, res, next) {
    try {
      const resenaLugarData = req.body;
      const nuevaResena = await ResenaLugarDAO.createResenaLugar(resenaLugarData);
      res.status(201).json(nuevaResena);
    } catch (error) {
      next(new AppError('Error al crear la reseña de lugar', 500));
    }
  }

  static async actualizarResenaLugar(req, res, next) {
    try {
      const { id } = req.params;
      const resenaLugarData = req.body;
      const resenaActualizada = await ResenaLugarDAO.updateResenaLugar(id, resenaLugarData);
      res.status(200).json(resenaActualizada);
    } catch (error) {
      next(new AppError('Error al actualizar la reseña de lugar', 500));
    }
  }

  static async eliminarResenaLugar(req, res, next) {
    try {
      const { id } = req.params;
      await ResenaLugarDAO.deleteResenaLugar(id);
      res.status(200).json({ message: 'Reseña de lugar eliminada correctamente' });
    } catch (error) {
      next(new AppError('Error al eliminar la reseña de lugar', 500));
    }
  }

  static async obtenerCalificacionPromedioPorNombreLugar(req, res, next) {
    try {
      const { placeName } = req.params;
      const calificacionPromedio = await ResenaLugarDAO.getAverageRatingByPlaceName(placeName);
      res.status(200).json({ averageRating: calificacionPromedio });
    } catch (error) {
      next(new AppError('Error al obtener la calificación promedio del lugar', 500));
    }
  }
}

module.exports = ResenaLugarController;
