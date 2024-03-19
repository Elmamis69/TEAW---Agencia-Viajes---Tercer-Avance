const ItinerarioDAO = require('../dataAccess/itinerarioDAO');
const { AppError } = require('../utils/appError');

class ItinerarioController {
  static async obtenerTodosLosItinerarios(req, res, next) {
    try {
      const itinerarios = await ItinerarioDAO.getAllItinerarios();
      res.status(200).json(itinerarios);
    } catch (error) {
      next(new AppError('Error al obtener los itinerarios', 500));
    }
  }

  static async obtenerItinerarioPorId(req, res, next) {
    try {
      const { id } = req.params;
      const itinerario = await ItinerarioDAO.getItinerarioById(id);
      if (!itinerario) {
        return next(new AppError('Itinerario no encontrado', 404));
      }
      res.status(200).json(itinerario);
    } catch (error) {
      next(new AppError('Error al obtener el itinerario', 500));
    }
  }

  static async obtenerItinerariosPorViajeId(req, res, next) {
    try {
      const { viajeId } = req.params;
      const itinerarios = await ItinerarioDAO.getItinerariosByViajeId(viajeId);
      res.status(200).json(itinerarios);
    } catch (error) {
      next(new AppError('Error al obtener los itinerarios del viaje', 500));
    }
  }

  static async crearItinerario(req, res, next) {
    try {
      const itinerarioData = req.body;
      const nuevoItinerario = await ItinerarioDAO.createItinerario(itinerarioData);
      res.status(201).json(nuevoItinerario);
    } catch (error) {
      next(new AppError('Error al crear el itinerario', 500));
    }
  }

  static async actualizarItinerario(req, res, next) {
    try {
      const { id } = req.params;
      const itinerarioData = req.body;
      const itinerarioActualizado = await ItinerarioDAO.updateItinerario(id, itinerarioData);
      res.status(200).json(itinerarioActualizado);
    } catch (error) {
      next(new AppError('Error al actualizar el itinerario', 500));
    }
  }

  static async eliminarItinerario(req, res, next) {
    try {
      const { id } = req.params;
      await ItinerarioDAO.deleteItinerario(id);
      res.status(200).json({ message: 'Itinerario eliminado correctamente' });
    } catch (error) {
      next(new AppError('Error al eliminar el itinerario', 500));
    }
  }
}

module.exports = ItinerarioController;
