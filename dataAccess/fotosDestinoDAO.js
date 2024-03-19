
const Horario = require('./../models/fotosdestino');

const fotosDestinoDAO = {
  // Función para crear una nueva foto de destino
  async crearFotoDestino(idDestino, fotoUrl) {
    try {
      const nuevaFotoDestino = new FotosDestino({
        idDestino,
        foto: fotoUrl
      });
      const fotoCreada = await nuevaFotoDestino.save();
      return fotoCreada;
    } catch (error) {
      throw new Error(`Error al crear foto de destino: ${error.message}`);
    }
  },

  // Función para obtener todas las fotos de un destino por su ID
  async obtenerFotosPorIdDestino(idDestino) {
    try {
      const fotos = await FotosDestino.find({ idDestino });
      return fotos;
    } catch (error) {
      throw new Error(`Error al obtener fotos por ID de destino: ${error.message}`);
    }
  },

  // Función para obtener una foto de destino por su ID
  async obtenerFotoPorId(idFoto) {
    try {
      const foto = await FotosDestino.findById(idFoto);
      return foto;
    } catch (error) {
      throw new Error(`Error al obtener foto por ID: ${error.message}`);
    }
  },

  // Función para actualizar una foto de destino por su ID
  async actualizarFotoDestino(idFoto, nuevaUrl) {
    try {
      const fotoActualizada = await FotosDestino.findByIdAndUpdate(idFoto, { foto: nuevaUrl }, { new: true });
      return fotoActualizada;
    } catch (error) {
      throw new Error(`Error al actualizar foto de destino: ${error.message}`);
    }
  },

  // Función para eliminar una foto de destino por su ID
  async eliminarFotoDestino(idFoto) {
    try {
      const fotoEliminada = await FotosDestino.findByIdAndDelete(idFoto);
      return fotoEliminada;
    } catch (error) {
      throw new Error(`Error al eliminar foto de destino: ${error.message}`);
    }
  }
};

module.exports = fotosDestinoDAO;
