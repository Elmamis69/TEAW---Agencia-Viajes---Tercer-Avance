const express = require('express');
const FotoDestinoController = require('../controllers/fotoDestinoController');
const jwtUtils = require('../utils/jwt');
const router = express.Router();

// Rutas para operaciones CRUD en fotos de destino
router.post('/:idDestino', jwtUtils.verifyToken, FotoDestinoController.crearFotoDestino);
router.get('/:idDestino', FotoDestinoController.obtenerFotoPorId);
router.delete('/:idDestino/:idFoto', jwtUtils.verifyToken, FotoDestinoController.eliminarFotoDestino);

module.exports = router;
