const express = require('express');
const FotoResenaController = require('../controllers/fotoResenaController');
const jwtUtils = require('../utils/jwt');
const router = express.Router();

// Rutas para operaciones CRUD en fotos de reseña
router.post('/:idResena', jwtUtils.verifyToken, FotoResenaController.subirFotoResena);
router.get('/:idResena', FotoResenaController.obtenerFotosResenaPorResena);
router.delete('/:idResena/:idFoto', jwtUtils.verifyToken, FotoResenaController.eliminarFotoResena);

module.exports = router;
