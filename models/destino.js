'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Destino extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Destino.hasMany(models.Publicacion,{foreignKey:"idDestino"})
      Destino.hasMany(models.fotosDestino,{foreignKey:"idDestino"})
    }
  }
  Destino.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    ubicacion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Destino',
  });
  return Destino;
};