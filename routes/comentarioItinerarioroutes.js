const express = require('express');
const ComentarioItinerarioController = require('../controllers/comentarioItinerarioController');
const jwtUtils = require('../utils/jwt');
const router = express.Router();

// Rutas para operaciones CRUD en comentarios de itinerario
router.post('/:idItinerario', jwtUtils.verifyToken, ComentarioItinerarioController.crearComentarioItinerario);
router.get('/:idItinerario', ComentarioItinerarioController.obtenercomentarioItinerarioPorItinerario);
router.get('/:idItinerario/:idComentario', ComentarioItinerarioController.obtenerComentarioItinerarioPorId);
router.put('/:idItinerario/:idComentario', jwtUtils.verifyToken, ComentarioItinerarioController.actualizarComentarioItinerario);
router.delete('/:idItinerario/:idComentario', jwtUtils.verifyToken, ComentarioItinerarioController.eliminarComentarioItinerario);

module.exports = router;
   