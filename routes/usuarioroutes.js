const express = require('express');
const UsuarioController = require('../controllers/usuarioController');
const jwtUtils = require('../utils/jwt'); // Importar el módulo jwtUtils
const router = express.Router();

// Rutas para operaciones CRUD en usuarios
router.get('/', jwtUtils.verifyToken, UsuarioController.obtenerUsuarios); // Agregar verificación de token JWT
router.get('/:id', jwtUtils.verifyToken, UsuarioController.obtenerUsuarioPorId); // Agregar verificación de token JWT
router.post('/', UsuarioController.crearUsuario);
router.put('/:id', jwtUtils.verifyToken, UsuarioController.actualizarUsuario); // Agregar verificación de token JWT
router.delete('/:id', jwtUtils.verifyToken, UsuarioController.eliminarUsuario); // Agregar verificación de token JWT

module.exports = router;
