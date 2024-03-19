const { comentarioItinerario } = require('../models');

async function crearComentarioItinerario(req, res) {
  try {
    const { idItinerario, Comentario, fecha } = req.body;

    // Validate input data
    if (!idItinerario || !Comentario || !fecha) {
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    // Create a new itinerary comment
    const nuevoComentarioItinerario = await comentarioItinerario.create(req.body);

    // Return the new itinerary comment
    return res.status(201).json(nuevoComentarioItinerario);
  } catch (error) {
    // Handle Sequelize errors
    if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError'){
      return res.status(400).json({ error: error.errors.map(err => err.message) });
    }

    // Handle other errors
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = crearComentarioItinerario;