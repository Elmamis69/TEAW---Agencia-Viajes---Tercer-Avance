'use strict';
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

const FotosDestino = require('../models/fotosdestino')(sequelize, DataTypes);

class FotosDestinoDAO {
  async create(data) {
    const fotosDestino = await FotosDestino.create(data);
    return fotosDestino;
  }

  async findAll() {
    const fotosDestinos = await FotosDestino.findAll();
    return fotosDestinos;
  }

  async findById(id) {
    const fotosDestino = await FotosDestino.findByPk(id);
    return fotosDestino;
  }

  async update(id, data) {
    const fotosDestino = await FotosDestino.findByPk(id);
    await fotosDestino.update(data);
    return fotosDestino;
  }

  async delete(id) {
    const fotosDestino = await FotosDestino.findByPk(id);
    await fotosDestino.destroy();
    return fotosDestino;
  }
}

module.exports = FotosDestinoDAO;