const { fotosDestino } = require('../models');

async function crearFotoDestino(req, res) {
  try {
    const { idDestino, foto } = req.body;

    // Validate input data
    if (!idDestino || !foto) {
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    // Create a new destination photo
    const nuevaFotoDestino = await fotosDestino.create(req.body);

    // Return the new destination photo
    return res.status(201).json(nuevaFotoDestino);
  } catch (error) {
    // Handle Sequelize errors
    if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ error: error.errors.map(err => err.message) });
    }

    // Handle other errors
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = crearFotoDestino;