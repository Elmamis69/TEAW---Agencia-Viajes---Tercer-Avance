const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

mongoose.connect('mongodb://localhost:27017/ConexionAgencia', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const models = {};

fs.readdirSync(__dirname)
  .filter(file => file !== 'index.js') // Excluir el archivo index.js
  .forEach(file => {
    const model = require(path.join(__dirname, file));
    models[model.modelName] = model;
  });

module.exports = models;
