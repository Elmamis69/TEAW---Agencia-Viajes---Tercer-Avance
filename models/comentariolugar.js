'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comentarioLugar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      comentarioLugar.belongsTo(models.ResenaLugar,{foreignKey:"idResenaLugar"})
    }
  }
  comentarioLugar.init({
    idResenaLugar: DataTypes.INTEGER,
    Comentario: DataTypes.STRING,
    fecha: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'comentarioLugar',
  });
  return comentarioLugar;
};