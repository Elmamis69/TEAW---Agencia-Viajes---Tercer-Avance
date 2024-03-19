const { Notificacione } = require('../models');

async function crearNotificacione(req, res) {
  try {
    const { tipoActividad, idUsuario, Fecha } = req.body;

    // Validate input data
    if (!tipoActividad || !idUsuario || !Fecha) {
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    // Create a new notification
    const nuevaNotificacione = await Notificacione.create(req.body);

    // Return the new notification
    return res.status(201).json(nuevaNotificacione);
  } catch (error) {
    // Handle Sequelize errors
    if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ error: error.errors.map(err => err.message) });
    }

    // Handle other errors
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = crearNotificacione;