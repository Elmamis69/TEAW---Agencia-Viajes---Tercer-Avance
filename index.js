const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { globalErrorHandler, AppError } = require('./utils/appError');
const db = require('./config/db');

// Conexión a la base de datos
db.conectar();

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan('combined'));

// Rutas
const usuarioRoutes = require('./routes/usuarioroutes');
const destinoRoutes = require('./routes/destinoroutes');
const publicacionRoutes = require('./routes/publicacionroutes');
const itinerarioRoutes = require('./routes/itinerarioroutes');
const resenaLugarRoutes = require('./routes/resenasLugarroutes');
const comentarioItinerarioRoutes = require('./routes/comentarioItinerarioroutes');
const comentarioLugarRoutes = require('./routes/comentarioLugarroutes');
const comentarioPublicacionRoutes = require('./routes/comentariPublicacionroutes');
const fotoDestinoRoutes = require('./routes/fotoDestinoroutes');
const fotoResenaRoutes = require('./routes/fotoResenaroutes');
const horarioRoutes = require('./routes/horarioroutes');
const notificacioneRoutes = require('./routes/notificacioneroutes');
const reaccionPublicacionRoutes = require('./routes/reaccionPublicacionroutes');

app.use('/api/usuarios', usuarioRoutes);
app.use('/api/destinos', destinoRoutes);
app.use('/api/publicaciones', publicacionRoutes);
app.use('/api/itinerarios', itinerarioRoutes);
app.use('/api/resenas-lugar', resenaLugarRoutes);
app.use('/api/comentarios-itinerario', comentarioItinerarioRoutes);
app.use('/api/comentarios-lugar', comentarioLugarRoutes);
app.use('/api/comentarios-publicacion', comentarioPublicacionRoutes);
app.use('/api/fotos-destino', fotoDestinoRoutes);
app.use('/api/fotos-resena', fotoResenaRoutes);
app.use('/api/horarios', horarioRoutes);
app.use('/api/notificaciones', notificacioneRoutes);
app.use('/api/reacciones-publicacion', reaccionPublicacionRoutes);

// Manejo de errores para rutas no definidas
app.all('*', (req, res, next) => {
    const error = new AppError(`No se pudo acceder a la ruta: ${req.originalUrl} en el servicio web`, 404);
    next(error);
});

// Manejo global de errores
app.use(globalErrorHandler);

// Puerto
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`El servidor está escuchando en el puerto ${port}`);
});
