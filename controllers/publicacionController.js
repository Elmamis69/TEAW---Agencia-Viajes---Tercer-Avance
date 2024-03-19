const { Publicacion } = require('../models');

async function crearPublicacion(req, res) {
  try {
    const { contenido, fecha, idUsuario, idDestino } = req.body;

    // Validate input data
    if (!contenido || !fecha || !idUsuario || !idDestino) {
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    // Create a new publication
    const nuevaPublicacion = await Publicacion.create(req.body);

    // Return the new publication
    return res.status(201).json(nuevaPublicacion);
  } catch (error) {
    // Handle Sequelize errors
    if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ error: error.errors.map(err => err.message) });
    }

    // Handle other errors
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = crearPublicacion;