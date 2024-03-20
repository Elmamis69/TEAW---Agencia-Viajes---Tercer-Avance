const DestinoDAO = require('../dataAccess/destinoDAO');
const { AppError } = require('../utils/appError');

class DestinoController {
  static async obtenerTodosLosDestinos(req, res, next) {
    try {
      const destinos = await DestinoDAO.obtenerTodosLosDestinos();
      res.status(200).json(destinos);
    } catch (error) {
      next(new AppError('Error al obtener todos los destinos', 500));
    }
  }

  static async obtenerDestinoPorId(req, res, next) {
    try {
      const { id } = req.params;
      const destino = await DestinoDAO.obtenerDestinoPorId(id);
      if (!destino) {
        return next(new AppError('Destino no encontrado', 404));
      }
      res.status(200).json(destino);
    } catch (error) {
      next(new AppError('Error al obtener el destino', 500));
    }
  }

  static async crearDestino(req, res, next) {
    try {
      const { nombre, descripcion, ubicacion } = req.body;
      const nuevoDestino = await DestinoDAO.crearDestino(nombre, descripcion, ubicacion);
      res.status(201).json(nuevoDestino);
    } catch (error) {
      next(new AppError('Error al crear el destino', 500));
    }
  }

  static async actualizarDestino(req, res, next) {
    try {
      const { id } = req.params;
      const nuevosDatos = req.body;
      const destinoActualizado = await DestinoDAO.actualizarDestino(id, nuevosDatos);
      res.status(200).json(destinoActualizado);
    } catch (error) {
      next(new AppError('Error al actualizar el destino', 500));
    }
  }

  static async eliminarDestino(req, res, next) {
    try {
      const { id } = req.params;
      await DestinoDAO.eliminarDestino(id);
      res.status(200).json({ message: 'Destino eliminado correctamente' });
    } catch (error) {
      next(new AppError('Error al eliminar el destino', 500));
    }
  }
}

module.exports = DestinoController;
