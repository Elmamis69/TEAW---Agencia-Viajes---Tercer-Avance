'use strict';
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

const Destino = require('../models/destino')(sequelize, DataTypes);

class DestinoDAO {
  async create(data) {
    const destino = await Destino.create(data);
    return destino;
  }

  async findAll() {
    const destinos = await Destino.findAll();
    return destinos;
  }

  async findById(id) {
    const destino = await Destino.findByPk(id);
    return destino;
  }

  async update(id, data) {
    const destino = await Destino.findByPk(id);
    await destino.update(data);
    return destino;
  }

  async delete(id) {
    const destino = await Destino.findByPk(id);
    await destino.destroy();
    return destino;
  }
}

module.exports = DestinoDAO;