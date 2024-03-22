const express = require('express');
const ReaccionPublicacionController = require('../controllers/reaccionPublicacionController');
const jwtUtils = require('../utils/jwt');
const router = express.Router();

// Rutas para operaciones CRUD en reacciones de publicaciones
router.post('/', jwtUtils.verifyToken, ReaccionPublicacionController.crearReaccionPublicacion);
router.delete('/:idReaccion', jwtUtils.verifyToken, ReaccionPublicacionController.eliminarReaccionPublicacion);

module.exports = router;
