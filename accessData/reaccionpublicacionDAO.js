const { reaccionPublicacion } = require('../models');

class ReaccionPublicacionDAO {
  async crearReaccionPublicacion(reaccionPublicacion) {
    return await reaccionPublicacion.create(reaccionPublicacion);
  }

  async obtenerReaccionesPublicacion() {
    return await reaccionPublicacion.findAll();
  }

  async obtenerReaccionPublicacionPorIdPublicacion(idPublicacion) {
    return await reaccionPublicacion.findAll({ where: { idPublicacion } });
  }

  async obtenerReaccionPublicacionPorUsuario(idUsuario) {
    return await reaccionPublicacion.findAll({ where: { idUsuario } });
  }

  async obtenerReaccionPublicacionPorIdPublicacionYIdUsuario(idPublicacion, idUsuario) {
    return await reaccionPublicacion.findOne({ where: { idPublicacion, idUsuario } });
  }

  async actualizarReaccionPublicacion(id, reaccionPublicacion) {
    const reaccionPublicacionActualizado = await reaccionPublicacion.findByPk(id);
    if (reaccionPublicacionActualizado) {
      await reaccionPublicacionActualizado.update(reaccionPublicacion);
      return reaccionPublicacionActualizado;
    }
    return null;
  }

  async eliminarReaccionPublicacion(id) {
    const reaccionPublicacionEliminado = await reaccionPublicacion.findByPk(id);
    if (reaccionPublicacionEliminado) {
      await reaccionPublicacionEliminado.destroy();
      return reaccionPublicacionEliminado;
    }
    return null;
  }
}

module.exports = ReaccionPublicacionDAO;