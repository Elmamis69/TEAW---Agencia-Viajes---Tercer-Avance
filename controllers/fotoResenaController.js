const { fotoResena } = require('../models');

async function crearFotoResena(req, res) {
  try {
    const { idResena, Foto } = req.body;

    // Validate input data
    if (!idResena || !Foto) {
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    // Create a new review photo
    const nuevaFotoResena = await fotoResena.create(req.body);

    // Return the new review photo
    return res.status(201).json(nuevaFotoResena);
  } catch (error) {
    // Handle Sequelize errors
    if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ error: error.errors.map(err => err.message) });
    }

    // Handle other errors
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = crearFotoResena;