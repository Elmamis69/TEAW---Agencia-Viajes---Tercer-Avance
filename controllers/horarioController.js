const HorarioDAO = require('../dataAccess/horarioDAO');
const { AppError } = require('../utils/appError');

class HorarioController {
  static async obtenerTodosLosHorarios(req, res, next) {
    try {
      const horarios = await HorarioDAO.getAllHorarios();
      res.status(200).json(horarios);
    } catch (error) {
      next(new AppError('Error al obtener los horarios', 500));
    }
  }

  static async obtenerHorarioPorId(req, res, next) {
    try {
      const { id } = req.params;
      const horario = await HorarioDAO.getHorarioById(id);
      if (!horario) {
        return next(new AppError('Horario no encontrado', 404));
      }
      res.status(200).json(horario);
    } catch (error) {
      next(new AppError('Error al obtener el horario', 500));
    }
  }

  static async obtenerHorariosPorItinerarioId(req, res, next) {
    try {
      const { itinerarioId } = req.params;
      const horarios = await HorarioDAO.getHorariosByItinerarioId(itinerarioId);
      res.status(200).json(horarios);
    } catch (error) {
      next(new AppError('Error al obtener los horarios del itinerario', 500));
    }
  }

  static async crearHorario(req, res, next) {
    try {
      const horarioData = req.body;
      const nuevoHorario = await HorarioDAO.createHorario(horarioData);
      res.status(201).json(nuevoHorario);
    } catch (error) {
      next(new AppError('Error al crear el horario', 500));
    }
  }

  static async actualizarHorario(req, res, next) {
    try {
      const { id } = req.params;
      const horarioData = req.body;
      const horarioActualizado = await HorarioDAO.updateHorario(id, horarioData);
      res.status(200).json(horarioActualizado);
    } catch (error) {
      next(new AppError('Error al actualizar el horario', 500));
    }
  }

  static async eliminarHorario(req, res, next) {
    try {
      const { id } = req.params;
      await HorarioDAO.deleteHorario(id);
      res.status(200).json({ message: 'Horario eliminado correctamente' });
    } catch (error) {
      next(new AppError('Error al eliminar el horario', 500));
    }
  }
}

module.exports = HorarioController;
