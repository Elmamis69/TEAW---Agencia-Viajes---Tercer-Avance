const { itinerario } = require('../models');

async function crearItinerario(req, res) {
  try {
    const { lugaresEspecificos, VinculoDeViaje } = req.body;

    // Validate input data
    if (!lugaresEspecificos || !VinculoDeViaje) {
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    // Create a new itinerary
    const nuevoItinerario = await itinerario.create(req.body);

    // Return the new itinerary
    return res.status(201).json(nuevoItinerario);
  } catch (error) {
    // Handle Sequelize errors
    if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ error: error.errors.map(err => err.message) });
    }

    // Handle other errors
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = crearItinerario;