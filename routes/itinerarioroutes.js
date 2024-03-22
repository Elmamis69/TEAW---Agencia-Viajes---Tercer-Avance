const express = require('express');
const ItinerarioController = require('../controllers/itinerariosController');
const jwtUtils = require('../utils/jwt');
const router = express.Router();

// Rutas para operaciones CRUD en itinerarios
router.post('/', jwtUtils.verifyToken, ItinerarioController.crearItinerario);
router.get('/', ItinerarioController.obtenerTodosLosItinerarios);
router.get('/:id', ItinerarioController.obtenerItinerarioPorId);
router.put('/:id', jwtUtils.verifyToken, ItinerarioController.actualizarItinerario);
router.delete('/:id', jwtUtils.verifyToken, ItinerarioController.eliminarItinerario);

module.exports = router;
