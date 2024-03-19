const express = require('express');
const ResenaLugarController = require('../controllers/resenalugarController');
const jwtUtils = require('../utils/jwt');
const router = express.Router();

// Rutas para operaciones CRUD en reseñas de lugares
router.post('/', jwtUtils.verifyToken, ResenaLugarController.crearResenaLugar);
router.get('/', ResenaLugarController.obtenerResenasLugar);
router.get('/:id', ResenaLugarController.obtenerResenaLugarPorId);
router.put('/:id', jwtUtils.verifyToken, ResenaLugarController.actualizarResenaLugar);
router.delete('/:id', jwtUtils.verifyToken, ResenaLugarController.eliminarResenaLugar);

module.exports = router;
