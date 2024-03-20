const ComentarioLugar = require('./../models/comentariolugar');

const comentarioLugarDAO = {
  // Función para crear un nuevo comentario de lugar
  async crearComentarioLugar(idResenaLugar, comentario, fecha) {
    try {
      const nuevoComentarioLugar = new ComentarioLugar({
        idResenaLugar,
        comentario,
        fecha
      });
      const comentarioCreado = await nuevoComentarioLugar.save();
      return comentarioCreado;
    } catch (error) {
      throw new Error(`Error al crear comentario de lugar: ${error.message}`);
    }
  },

  // Función para obtener todos los comentarios de un lugar por su ID de reseña
  async obtenerComentariosPorIdResenaLugar(idResenaLugar) {
    try {
      const comentarios = await ComentarioLugar.find({ idResenaLugar });
      return comentarios;
    } catch (error) {
      throw new Error(`Error al obtener comentarios por ID de reseña de lugar: ${error.message}`);
    }
  },

  // Función para obtener un comentario de lugar por su ID
  async obtenerComentarioLugarPorId(idComentarioLugar) {
    try {
      const comentario = await ComentarioLugar.findById(idComentarioLugar);
      return comentario;
    } catch (error) {
      throw new Error(`Error al obtener comentario de lugar por ID: ${error.message}`);
    }
  },

  // Función para actualizar un comentario de lugar por su ID
  async actualizarComentarioLugar(idComentarioLugar, nuevosDatos) {
    try {
      const comentarioActualizado = await ComentarioLugar.findByIdAndUpdate(idComentarioLugar, nuevosDatos, { new: true });
      return comentarioActualizado;
    } catch (error) {
      throw new Error(`Error al actualizar comentario de lugar: ${error.message}`);
    }
  },

  // Función para eliminar un comentario de lugar por su ID
  async eliminarComentarioLugar(idComentarioLugar) {
    try {
      const comentarioEliminado = await ComentarioLugar.findByIdAndDelete(idComentarioLugar);
      return comentarioEliminado;
    } catch (error) {
      throw new Error(`Error al eliminar comentario de lugar: ${error.message}`);
    }
  }
};

module.exports = comentarioLugarDAO;
