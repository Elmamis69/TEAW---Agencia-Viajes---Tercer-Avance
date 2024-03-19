const { Usuario } = require('../models');

class UsuarioDAO {
  async crearUsuario(usuario) {
    return await Usuario.create(usuario);
  }

  async obtenerUsuarios() {
    return await Usuario.findAll();
  }

  async obtenerUsuarioPorId(id) {
    return await Usuario.findByPk(id);
  }

  async actualizarUsuario(id, usuario) {
    const usuarioActualizado = await Usuario.findByPk(id);
    if (usuarioActualizado) {
      await usuarioActualizado.update(usuario);
      return usuarioActualizado;
    }
    return null;
  }

  async eliminarUsuario(id) {
    const usuarioEliminado = await Usuario.findByPk(id);
    if (usuarioEliminado) {
      await usuarioEliminado.destroy();
      return usuarioEliminado;
    }
    return null;
  }
}

module.exports = UsuarioDAO;