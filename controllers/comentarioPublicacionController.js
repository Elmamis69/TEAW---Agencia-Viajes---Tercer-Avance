const { ResenaLugar } = require('../models');

async function crearResenaLugar(req, res) {
  try {
    const { idUsuario, idDestino, calificacion, comentario } = req.body;

    // Validate input data
    if (!idUsuario || !idDestino || !calificacion || !comentario) {
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    // Create a new place review
    const nuevaResenaLugar = await ResenaLugar.create(req.body);

    // Return the new place review
    return res.status(201).json(nuevaResenaLugar);
  } catch (error) {
    // Handle Sequelize errors
    if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError'){
      return res.status(400).json({ error: error.errors.map(err => err.message) });
    }

    // Handle other errors
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = crearResenaLugar;