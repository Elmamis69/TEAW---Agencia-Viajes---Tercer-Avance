const { comentarioLugar } = require('../models');

async function crearComentarioLugar(req, res) {
  try {
    const { idResenaLugar, Comentario, fecha } = req.body;

    // Validate input data
    if (!idResenaLugar || !Comentario || !fecha) {
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    // Create a new place comment
    const nuevoComentarioLugar = await comentarioLugar.create(req.body);

    // Return the new place comment
    return res.status(201).json(nuevoComentarioLugar);
  } catch (error) {
    // Handle Sequelize errors
    if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ error: error.errors.map(err => err.message) });
    }

    // Handle other errors
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = crearComentarioLugar;