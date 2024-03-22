const express = require('express');
const NotificacioneController = require('../controllers/notificacioneController');
const jwtUtils = require('../utils/jwt');
const router = express.Router();

// Rutas para operaciones CRUD en notificaciones
router.post('/', jwtUtils.verifyToken, NotificacioneController.crearNotificacion);
router.get('/usuario/:idUsuario', jwtUtils.verifyToken, NotificacioneController.obtenerNotificacionesPorUsuarioId);
router.put('/:idNotificacion', jwtUtils.verifyToken, NotificacioneController.actualizarNotificacion);
router.delete('/:idNotificacion', jwtUtils.verifyToken, NotificacioneController.eliminarNotificacion);

module.exports = router;
