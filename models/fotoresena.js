'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fotoResena extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      fotoResena.belongsTo(models.ResenaLugar,{foreignKey:"idResenaLugar"})
    }
  }
  fotoResena.init({
    idResenaLugar: DataTypes.INTEGER,
    Foto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'fotoResena',
  });
  return fotoResena;
};