const { itinerario } = require('../models');

class ItinerarioDAO {
  async crearItinerario(itinerario) {
    return await itinerario.create(itinerario);
  }

  async obtenerItinerarios() {
    return await itinerario.findAll();
  }

  async obtenerItinerariosPorUsuario(idUsuario) {
    return await itinerario.findAll({ where: { idUsuario } });
  }

  async obtenerItinerarioPorId(id) {
    return await itinerario.findByPk(id);
  }

  async actualizarItinerario(id, itinerario) {
    const itinerarioActualizado = await itinerario.findByPk(id);
    if (itinerarioActualizado) {
      await itinerarioActualizado.update(itinerario);
      return itinerarioActualizado;
    }
    return null;
  }

  async eliminarItinerario(id) {
    const itinerarioEliminado = await itinerario.findByPk(id);
    if (itinerarioEliminado) {
      await itinerarioEliminado.destroy();
      return itinerarioEliminado;
    }
    return null;
  }
}

module.exports = ItinerarioDAO;