const mongoose = require('mongoose');

// URL de la base de datos MongoDB
const dbUrl = 'mongodb://root:root@localhost:27017/ConexionAgencia';

// Configuración de la conexión a la base de datos
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión a la base de datos establecida correctamente'))
  .catch(err => console.error('Error al conectar a la base de datos:', err));

// Exportar la conexión para su uso en otros módulos
module.exports = mongoose.connection;
