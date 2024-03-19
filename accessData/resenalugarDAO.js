const { resenalugar } = require('../models');

class resenalugarDAO {
  async crearResenalugar(resenalugar) {
    return await resenalugar.create(resenalugar);
  }

  async obtenerResenalugares() {
    return await resenalugar.findAll();
  }

  async obtenerResenalugarPorId(id) {
    return await resenalugar.findByPk(id);
  }

  async obtenerResenalugaresPorUsuario(idUsuario) {
    return await resenalugar.findAll({ where: { idUsuario } });
  }

  async actualizarResenalugar(id, resenalugar) {
    const resenalugarActualizado = await resenalugar.findByPk(id);
    if (resenalugarActualizado) {
      await resenalugarActualizado.update(resenalugar);
      return resenalugarActualizado;
    }
    return null;
  }

  async eliminarResenalugar(id) {
    const resenalugarEliminado = await resenalugar.findByPk(id);
    if (resenalugarEliminado) {
      await resenalugarEliminado.destroy();
      return resenalugarEliminado;
    }
    return null;
  }
}

module.exports = resenalugarDAO;