const { Notificacione } = require('../models');

class NotificacioneDAO {
  async crearNotificacione(notificacione) {
    return await Notificacione.create(notificacione);
  }

  async obtenerNotificaciones() {
    return await Notificacione.findAll();
  }

  async obtenerNotificacionesPorUsuario(idUsuario) {
    return await Notificacione.findAll({ where: { idUsuario } });
  }

  async obtenerNotificacionesPorTipoActividad(tipoActividad) {
    return await Notificacione.findAll({ where: { tipoActividad } });
  }

  async obtenerNotificacionesPorUsuarioYTipoActividad(idUsuario, tipoActividad) {
    return await Notificacione.findAll({ where: { idUsuario, tipoActividad } });
  }

  async obtenerNotificacionPorId(id) {
    return await Notificacione.findByPk(id);
  }

  async actualizarNotificacione(id, notificacione) {
    const notificacioneActualizado = await Notificacione.findByPk(id);
    if (notificacioneActualizado) {
      await notificacioneActualizado.update(notificacione);
      return notificacioneActualizado;
    }
    return null;
  }

  async eliminarNotificacione(id) {
    const notificacioneEliminado = await Notificacione.findByPk(id);
    if (notificacioneEliminado) {
      await notificacioneEliminado.destroy();
      return notificacioneEliminado;
    }
    return null;
  }
}

module.exports = NotificacioneDAO;