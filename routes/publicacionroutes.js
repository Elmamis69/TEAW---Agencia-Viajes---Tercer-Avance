const express = require('express');
const PublicacionController = require('../controllers/publicacionController');
const jwtUtils = require('../utils/jwt'); // Importar el módulo jwtUtils
const router = express.Router();

// Rutas para operaciones CRUD en publicaciones
router.get('/', PublicacionController.obtenerPublicaciones);
router.get('/:id', PublicacionController.obtenerPublicacionPorId);
router.post('/', jwtUtils.verifyToken, PublicacionController.crearPublicacion); // Agregar verificación de token JWT
router.put('/:id', jwtUtils.verifyToken, PublicacionController.actualizarPublicacion); // Agregar verificación de token JWT
router.delete('/:id', jwtUtils.verifyToken, PublicacionController.eliminarPublicacion); // Agregar verificación de token JWT

module.exports = router;
