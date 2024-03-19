'use strict';
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

const Horario = require('../models/horario')(sequelize, DataTypes);

class HorarioDAO {
  async create(data) {
    const horario = await Horario.create(data);
    return horario;
  }

  async findAll() {
    const horarios = await Horario.findAll();
    return horarios;
  }

  async findById(id) {
    const horario = await Horario.findByPk(id);
    return horario;
  }

  async update(id, data) {
    const horario = await Horario.findByPk(id);
    await horario.update(data);
    return horario;
  }

  async delete(id) {
    const horario = await Horario.findByPk(id);
    await horario.destroy();
    return horario;
  }
}

module.exports = HorarioDAO;