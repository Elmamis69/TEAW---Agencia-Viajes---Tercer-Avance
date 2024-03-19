const express = require('express');
const ReaccionPublicacionController = require('../controllers/reaccionPublicacionController');
const jwtUtils = require('../utils/jwt');
const router = express.Router();

// Rutas para operaciones CRUD en reacciones de publicaciones
router.post('/', jwtUtils.verifyToken, ReaccionPublicacionController.crearReaccion);
router.delete('/:idReaccion', jwtUtils.verifyToken, ReaccionPublicacionController.eliminarReaccion);

module.exports = router;
