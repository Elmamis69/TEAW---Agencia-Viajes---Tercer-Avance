const { Destino } = require('../models');

async function crearDestino(req, res) {
  try {
    const { nombre, descripcion, ubicacion } = req.body;

    // Validate input data
    if (!nombre || !descripcion || !ubicacion) {
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    // Create a new destination
    const nuevoDestino = await Destino.create(req.body);

    // Return the new destination
    return res.status(201).json(nuevoDestino);
  } catch (error) {
    // Handle Sequelize errors
    if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ error: error.errors.map(err => err.message) });
    }

    // Handle other errors
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = crearDestino;