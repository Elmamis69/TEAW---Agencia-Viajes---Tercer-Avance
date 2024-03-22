const express = require('express');
const ComentarioLugarController = require('../controllers/comentarioLugarController');
const jwtUtils = require('../utils/jwt');
const router = express.Router();

// Rutas para operaciones CRUD en comentarios de lugar
router.post('/:idResenaLugar', jwtUtils.verifyToken, ComentarioLugarController.crearComentarioLugar);
router.get('/:idResenaLugar', ComentarioLugarController.obtenerComentariosPorIdResenaLugar);
router.get('/:idResenaLugar/:idComentario', ComentarioLugarController.obtenerComentarioLugarPorId);
router.put('/:idResenaLugar/:idComentario', jwtUtils.verifyToken, ComentarioLugarController.actualizarComentarioLugar);
router.delete('/:idResenaLugar/:idComentario', jwtUtils.verifyToken, ComentarioLugarController.eliminarComentarioLugar);

module.exports = router;
