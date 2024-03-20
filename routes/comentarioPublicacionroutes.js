const express = require('express');
const ComentarioPublicacionController = require('../controllers/comentarioPublicacionController');
const jwtUtils = require('../utils/jwt');
const router = express.Router();

// Rutas para operaciones CRUD en comentarios de publicación
router.post('/:idPublicacion', jwtUtils.verifyToken, ComentarioPublicacionController.crearComentarioPublicacion);
router.get('/:idPublicacion', ComentarioPublicacionController.obtenerComentariosPublicacionPorPublicacion);
router.get('/:idPublicacion/:idComentario', ComentarioPublicacionController.obtenerComentarioPublicacionPorId);
router.put('/:idPublicacion/:idComentario', jwtUtils.verifyToken, ComentarioPublicacionController.actualizarComentarioPublicacion);
router.delete('/:idPublicacion/:idComentario', jwtUtils.verifyToken, ComentarioPublicacionController.eliminarComentarioPublicacion);

module.exports = router;
