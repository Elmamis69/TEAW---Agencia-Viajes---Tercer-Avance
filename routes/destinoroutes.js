const express = require('express');
const DestinoController = require('../controllers/destinoController');
const jwtUtils = require('../utils/jwt'); // Importar el módulo jwtUtils
const router = express.Router();

// Rutas para operaciones CRUD en destinos
router.get('/', DestinoController.obtenerDestinos);
router.get('/:id', DestinoController.obtenerDestinoPorId);
router.post('/', jwtUtils.verifyToken, DestinoController.crearDestino); // Agregar verificación de token JWT
router.put('/:id', jwtUtils.verifyToken, DestinoController.actualizarDestino); // Agregar verificación de token JWT
router.delete('/:id', jwtUtils.verifyToken, DestinoController.eliminarDestino); // Agregar verificación de token JWT

module.exports = router;
