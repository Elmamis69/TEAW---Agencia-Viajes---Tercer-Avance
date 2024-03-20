const FotosDestinoDAO = require('../dataAccess/fotosDestinoDAO');
const { AppError } = require('../utils/appError');

class FotoDestinoController {
  static async obtenerFotosPorIdDestino(req, res, next) {
    try {
      const { idDestino } = req.params;
      const fotos = await FotosDestinoDAO.obtenerFotosPorIdDestino(idDestino);
      res.status(200).json(fotos);
    } catch (error) {
      next(new AppError('Error al obtener fotos del destino', 500));
    }
  }

  static async obtenerFotoPorId(req, res, next) {
    try {
      const { id } = req.params;
      const foto = await FotosDestinoDAO.obtenerFotoPorId(id);
      if (!foto) {
        return next(new AppError('Foto de destino no encontrada', 404));
      }
      res.status(200).json(foto);
    } catch (error) {
      next(new AppError('Error al obtener la foto de destino', 500));
    }
  }

  static async crearFotoDestino(req, res, next) {
    try {
      const { idDestino, fotoUrl } = req.body;
      const nuevaFoto = await FotosDestinoDAO.crearFotoDestino(idDestino, fotoUrl);
      res.status(201).json(nuevaFoto);
    } catch (error) {
      next(new AppError('Error al crear la foto de destino', 500));
    }
  }

  static async actualizarFotoDestino(req, res, next) {
    try {
      const { id } = req.params;
      const { nuevaUrl } = req.body;
      const fotoActualizada = await FotosDestinoDAO.actualizarFotoDestino(id, nuevaUrl);
      res.status(200).json(fotoActualizada);
    } catch (error) {
      next(new AppError('Error al actualizar la foto de destino', 500));
    }
  }

  static async eliminarFotoDestino(req, res, next) {
    try {
      const { id } = req.params;
      await FotosDestinoDAO.eliminarFotoDestino(id);
      res.status(200).json({ message: 'Foto de destino eliminada correctamente' });
    } catch (error) {
      next(new AppError('Error al eliminar la foto de destino', 500));
    }
  }
}

module.exports = FotoDestinoController;
