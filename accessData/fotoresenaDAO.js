'use strict';
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

const FotoResena = require('../models/fotoResena')(sequelize, DataTypes);

class FotoResenaDAO {
  async create(data) {
    const fotoResena = await FotoResena.create(data);
    return fotoResena;
  }

  async findAll() {
    const fotoResenas = await FotoResena.findAll();
    return fotoResenas;
  }

  async findById(id) {
    const fotoResena = await FotoResena.findByPk(id);
    return fotoResena;
  }

  async update(id, data) {
    const fotoResena = await FotoResena.findByPk(id);
    await fotoResena.update(data);
    return fotoResena;
  }

  async delete(id) {
    const fotoResena = await FotoResena.findByPk(id);
    await fotoResena.destroy();
    return fotoResena;
  }
}

module.exports = FotoResenaDAO;