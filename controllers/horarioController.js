const { horario } = require('../models');

async function crearHorario(req, res) {
  try {
    const { idItinerario, horarioActividad, Descripcion } = req.body;

    // Validate input data
    if (!idItinerario || !horarioActividad || !Descripcion) {
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    // Create a new schedule
    const nuevoHorario = await horario.create(req.body);

    // Return the new schedule
    return res.status(201).json(nuevoHorario);
  } catch (error) {
    // Handle Sequelize errors
    if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ error: error.errors.map(err => err.message) });
    }

    // Handle other errors
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = crearHorario;