'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notificacione extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Notificacione.init({
    tipoActividad: DataTypes.STRING,
    idUsuario: DataTypes.INTEGER,
    Fecha: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Notificacione',
  });
  return Notificacione;
};