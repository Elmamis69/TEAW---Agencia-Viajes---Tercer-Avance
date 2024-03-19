'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Usuario.hasMany(models.Publicacion,{foreignKey:"idUsuario"})
      Usuario.hasMany(models.ResenaLugar,{foreignKey:"idUsuario"})
    }
  }
  Usuario.init({
    NombreUsuario: DataTypes.STRING,
    correo: DataTypes.STRING,
    contrasenia: DataTypes.STRING,
    info: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};