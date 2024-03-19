const { reaccionPublicacion } = require('../models');

async function crearReaccionPublicacion(req, res) {
  try {
    const { idPublicacion, tipo, idUsuario } = req.body;

    // Validate input data
    if (!idPublicacion || !tipo || !idUsuario) {
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    // Create a new publication reaction
    const nuevaReaccionPublicacion = await reaccionPublicacion.create(req.body);

    // Return the new publication reaction
    return res.status(201).json(nuevaReaccionPublicacion);
  } catch (error) {
    // Handle Sequelize errors
    if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ error: error.errors.map(err => err.message) });
    }

    // Handle other errors
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = crearReaccionPublicacion;