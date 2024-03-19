const Destino = require('./../models/destino');

const destinoDAO = {
  // Función para crear un nuevo destino
  async crearDestino(nombre, descripcion, ubicacion) {
    try {
      const nuevoDestino = new Destino({
        nombre,
        descripcion,
        ubicacion
      });
      const destinoCreado = await nuevoDestino.save();
      return destinoCreado;
    } catch (error) {
      throw new Error(`Error al crear destino: ${error.message}`);
    }
  },

  // Función para obtener todos los destinos
  async obtenerTodosLosDestinos() {
    try {
      const destinos = await Destino.find();
      return destinos;
    } catch (error) {
      throw new Error(`Error al obtener todos los destinos: ${error.message}`);
    }
  },

  // Función para obtener un destino por su ID
  async obtenerDestinoPorId(idDestino) {
    try {
      const destino = await Destino.findById(idDestino);
      return destino;
    } catch (error) {
      throw new Error(`Error al obtener destino por ID: ${error.message}`);
    }
  },

  // Función para actualizar un destino por su ID
  async actualizarDestino(idDestino, nuevosDatos) {
    try {
      const destinoActualizado = await Destino.findByIdAndUpdate(idDestino, nuevosDatos, { new: true });
      return destinoActualizado;
    } catch (error) {
      throw new Error(`Error al actualizar destino: ${error.message}`);
    }
  },

  // Función para eliminar un destino por su ID
  async eliminarDestino(idDestino) {
    try {
      const destinoEliminado = await Destino.findByIdAndDelete(idDestino);
      return destinoEliminado;
    } catch (error) {
      throw new Error(`Error al eliminar destino: ${error.message}`);
    }
  }
};

module.exports = destinoDAO;