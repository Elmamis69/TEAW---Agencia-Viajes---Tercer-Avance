const FotoResena = require('./../models/fotoresena');

const fotoResenaDAO = {
  // Función para crear una nueva foto de reseña
  async crearFotoResena(idResena, fotoUrl) {
    try {
      const nuevaFotoResena = new FotoResena({
        idResena,
        Foto: fotoUrl
      });
      const fotoCreada = await nuevaFotoResena.save();
      return fotoCreada;
    } catch (error) {
      throw new Error(`Error al crear foto de reseña: ${error.message}`);
    }
  },

  // Función para obtener todas las fotos de una reseña por su ID
  async obtenerFotosPorIdResena(idResena) {
    try {
      const fotos = await FotoResena.find({ idResena });
      return fotos;
    } catch (error) {
      throw new Error(`Error al obtener fotos por ID de reseña: ${error.message}`);
    }
  },

  // Función para obtener una foto de reseña por su ID
  async obtenerFotoResenaPorId(idFotoResena) {
    try {
      const foto = await FotoResena.findById(idFotoResena);
      return foto;
    } catch (error) {
      throw new Error(`Error al obtener foto de reseña por ID: ${error.message}`);
    }
  },

  // Función para actualizar una foto de reseña por su ID
  async actualizarFotoResena(idFotoResena, nuevaUrl) {
    try {
      const fotoActualizada = await FotoResena.findByIdAndUpdate(idFotoResena, { Foto: nuevaUrl }, { new: true });
      return fotoActualizada;
    } catch (error) {
      throw new Error(`Error al actualizar foto de reseña: ${error.message}`);
    }
  },

  // Función para eliminar una foto de reseña por su ID
  async eliminarFotoResena(idFotoResena) {
    try {
      const fotoEliminada = await FotoResena.findByIdAndDelete(idFotoResena);
      return fotoEliminada;
    } catch (error) {
      throw new Error(`Error al eliminar foto de reseña: ${error.message}`);
    }
  }
};

module.exports = fotoResenaDAO;