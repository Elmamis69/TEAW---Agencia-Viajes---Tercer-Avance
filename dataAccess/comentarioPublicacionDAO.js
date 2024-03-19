const ComentarioPublicacion = require('./../models/comentariopublicacion');

const comentarioPublicacionDAO = {
  // Función para crear un nuevo comentario de publicación
  async crearComentarioPublicacion(idPublicacion, comentario) {
    try {
      const nuevoComentario = new ComentarioPublicacion({
        idPublicacion,
        Comentario: comentario
      });
      const comentarioCreado = await nuevoComentario.save();
      return comentarioCreado;
    } catch (error) {
      throw new Error(`Error al crear comentario de publicación: ${error.message}`);
    }
  },

  // Función para obtener todos los comentarios de una publicación por su ID
  async obtenerComentariosPorIdPublicacion(idPublicacion) {
    try {
      const comentarios = await ComentarioPublicacion.find({ idPublicacion });
      return comentarios;
    } catch (error) {
      throw new Error(`Error al obtener comentarios por ID de publicación: ${error.message}`);
    }
  },

  // Función para obtener un comentario de publicación por su ID
  async obtenerComentarioPublicacionPorId(idComentario) {
    try {
      const comentario = await ComentarioPublicacion.findById(idComentario);
      return comentario;
    } catch (error) {
      throw new Error(`Error al obtener comentario de publicación por ID: ${error.message}`);
    }
  },

  // Función para actualizar un comentario de publicación por su ID
  async actualizarComentarioPublicacion(idComentario, nuevoComentario) {
    try {
      const comentarioActualizado = await ComentarioPublicacion.findByIdAndUpdate(idComentario, { Comentario: nuevoComentario }, { new: true });
      return comentarioActualizado;
    } catch (error) {
      throw new Error(`Error al actualizar comentario de publicación: ${error.message}`);
    }
  },

  // Función para eliminar un comentario de publicación por su ID
  async eliminarComentarioPublicacion(idComentario) {
    try {
      const comentarioEliminado = await ComentarioPublicacion.findByIdAndDelete(idComentario);
      return comentarioEliminado;
    } catch (error) {
      throw new Error(`Error al eliminar comentario de publicación: ${error.message}`);
    }
  }
};

module.exports = comentarioPublicacionDAO;
