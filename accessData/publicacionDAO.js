const { Publicacion } = require('../models');

class PublicacionDAO {
  async crearPublicacion(publicacion) {
    return await Publicacion.create(publicacion);
  }

  async obtenerPublicaciones() {
    return await Publicacion.findAll();
  }

  async obtenerPublicacionesPorUsuario(idUsuario) {
    return await Publicacion.findAll({ where: { idUsuario } });
  }

  async obtenerPublicacionesPorDestino(idDestino) {
    return await Publicacion.findAll({ where: { idDestino } });
  }

  async obtenerPublicacionPorId(id) {
    return await Publicacion.findByPk(id);
  }

  async actualizarPublicacion(id, publicacion) {
    const publicacionActualizado = await Publicacion.findByPk(id);
    if (publicacionActualizado) {
      await publicacionActualizado.update(publicacion);
      return publicacionActualizado;
    }
    return null;
  }

  async eliminarPublicacion(id) {
    const publicacionEliminado = await Publicacion.findByPk(id);
    if (publicacionEliminado) {
      await publicacionEliminado.destroy();
      return publicacionEliminado;
    }
    return null;
  }
}

module.exports = PublicacionDAO;