const ComentarioItinerario = require('./../models/comentarioitinerario');

const comentarioItinerarioDAO = {
  // Función para crear un nuevo comentario de itinerario
  async crearComentarioItinerario(idItinerario, comentario, fecha) {
    try {
      const nuevoComentarioItinerario = new ComentarioItinerario({
        idItinerario,
        comentario,
        fecha
      });
      const comentarioCreado = await nuevoComentarioItinerario.save();
      return comentarioCreado;
    } catch (error) {
      throw new Error(`Error al crear comentario de itinerario: ${error.message}`);
    }
  },

  // Función para obtener todos los comentarios de un itinerario por su ID
  async obtenerComentariosPorIdItinerario(idItinerario) {
    try {
      const comentarios = await ComentarioItinerario.find({ idItinerario });
      return comentarios;
    } catch (error) {
      throw new Error(`Error al obtener comentarios por ID de itinerario: ${error.message}`);
    }
  },

  // Función para obtener un comentario de itinerario por su ID
  async obtenerComentarioItinerarioPorId(idComentarioItinerario) {
    try {
      const comentario = await ComentarioItinerario.findById(idComentarioItinerario);
      return comentario;
    } catch (error) {
      throw new Error(`Error al obtener comentario de itinerario por ID: ${error.message}`);
    }
  },

  // Función para actualizar un comentario de itinerario por su ID
  async actualizarComentarioItinerario(idComentarioItinerario, nuevosDatos) {
    try {
      const comentarioActualizado = await ComentarioItinerario.findByIdAndUpdate(idComentarioItinerario, nuevosDatos, { new: true });
      return comentarioActualizado;
    } catch (error) {
      throw new Error(`Error al actualizar comentario de itinerario: ${error.message}`);
    }
  },

  // Función para eliminar un comentario de itinerario por su ID
  async eliminarComentarioItinerario(idComentarioItinerario) {
    try {
      const comentarioEliminado = await ComentarioItinerario.findByIdAndDelete(idComentarioItinerario);
      return comentarioEliminado;
    } catch (error) {
      throw new Error(`Error al eliminar comentario de itinerario: ${error.message}`);
    }
  }
};

module.exports = comentarioItinerarioDAO;
