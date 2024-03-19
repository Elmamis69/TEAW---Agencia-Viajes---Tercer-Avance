const { Usuario } = require('../models');

class UsuarioController {
  // Crear un nuevo usuario
  async crearUsuario(req, res) {
    try {
      const { NombreUsuario, correo, contrasenia, info } = req.body;

      // Validar los datos de entrada
      if (!NombreUsuario || !correo || !contrasenia) {
        return res.status(400).json({ error: 'Todos los campos son requeridos' });
      }

      // Crear un nuevo usuario
      const nuevoUsuario = await Usuario.create(req.body);

      // Devolver el nuevo usuario
      return res.status(201).json(nuevoUsuario);
    } catch (error) {
      // Manejar errores de Sequelize
      if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
        return res.status(400).json({ error: error.errors.map(err => err.message) });
      }

      // Manejar otros errores
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  }

  // Obtener todos los usuarios
  async obtenerUsuarios(req, res) {
    try {
      const usuarios = await Usuario.findAll();

      // Devolver los usuarios
      return res.status(200).json(usuarios);
    } catch (error) {
      // Manejar errores de Sequelize
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  }

  // Obtener un usuario por id
  async obtenerUsuarioPorId(req, res) {
    try {
      const { id } = req.params;

      // Encontrar el usuario por id
      const usuario = await Usuario.findByPk(id);

      // Si el usuario no se encuentra, devolver un error 404
      if (!usuario) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      // Devolver el usuario
      return res.status(200).json(usuario);
    } catch (error) {
      // Manejar errores de Sequelize
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  }

  // Actualizar un usuario por id
  async actualizarUsuario(req, res) {
    try {
      const { id } = req.params;

      // Encontrar el usuario por id
      const usuario = await Usuario.findByPk(id);

      // Si el usuario no se encuentra, devolver un error 404
      if (!usuario) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      // Actualizar el usuario
      await usuario.update(req.body);

      // Devolver el usuario actualizado
      return res.status(200).json(usuario);
    } catch (error) {
      // Manejar errores de Sequelize
      if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
        return res.status(400).json({ error: error.errors.map(err => err.message) });
      }

      // Manejar otros errores
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  }

  // Eliminar un usuario por id
  async eliminarUsuario(req, res) {
    try {
      const { id } = req.params;

      // Encontrar el usuario por id
      const usuario = await Usuario.findByPk(id);

      // Si el usuario no se encuentra, devolver un error 404
      if (!usuario) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      // Eliminar el usuario
      await usuario.destroy();

      // Devolver un mensaje de éxito
      return res.status(200).json({ message: 'Usuario eliminado exitosamente' });
    } catch (error) {
      // Manejar errores de Sequelize
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
}

module.exports = UsuarioController;