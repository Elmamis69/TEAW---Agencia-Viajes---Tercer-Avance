const FotoResenaDAO = require('../dataAccess/fotoResenaDAO');
const { AppError } = require('../utils/appError');

class FotoResenaController {
  static async obtenerFotosPorIdResena(req, res, next) {
    try {
      const { idResena } = req.params;
      const fotos = await FotoResenaDAO.obtenerFotosPorIdResena(idResena);
      res.status(200).json(fotos);
    } catch (error) {
      next(new AppError('Error al obtener fotos de la reseña', 500));
    }
  }

  static async obtenerFotoResenaPorId(req, res, next) {
    try {
      const { id } = req.params;
      const foto = await FotoResenaDAO.obtenerFotoResenaPorId(id);
      if (!foto) {
        return next(new AppError('Foto de reseña no encontrada', 404));
      }
      res.status(200).json(foto);
    } catch (error) {
      next(new AppError('Error al obtener la foto de reseña', 500));
    }
  }

  static async crearFotoResena(req, res, next) {
    try {
      const { idResena, fotoUrl } = req.body;
      const nuevaFoto = await FotoResenaDAO.crearFotoResena(idResena, fotoUrl);
      res.status(201).json(nuevaFoto);
    } catch (error) {
      next(new AppError('Error al crear la foto de reseña', 500));
    }
  }

  static async actualizarFotoResena(req, res, next) {
    try {
      const { id } = req.params;
      const { nuevaUrl } = req.body;
      const fotoActualizada = await FotoResenaDAO.actualizarFotoResena(id, nuevaUrl);
      res.status(200).json(fotoActualizada);
    } catch (error) {
      next(new AppError('Error al actualizar la foto de reseña', 500));
    }
  }

  static async eliminarFotoResena(req, res, next) {
    try {
      const { id } = req.params;
      await FotoResenaDAO.eliminarFotoResena(id);
      res.status(200).json({ message: 'Foto de reseña eliminada correctamente' });
    } catch (error) {
      next(new AppError('Error al eliminar la foto de reseña', 500));
    }
  }
}

module.exports = FotoResenaController;
