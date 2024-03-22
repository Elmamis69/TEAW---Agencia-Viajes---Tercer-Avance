const express = require('express');
const HorarioController = require('../controllers/horarioController');
const jwtUtils = require('../utils/jwt');
const router = express.Router();

// Rutas para operaciones CRUD en horarios
router.post('/:idItinerario', jwtUtils.verifyToken, HorarioController.crearHorario);
router.get('/:idItinerario', HorarioController.obtenerHorarioPorId);
router.put('/:idHorario', jwtUtils.verifyToken, HorarioController.actualizarHorario);
router.delete('/:idHorario', jwtUtils.verifyToken, HorarioController.eliminarHorario);

module.exports = router;
