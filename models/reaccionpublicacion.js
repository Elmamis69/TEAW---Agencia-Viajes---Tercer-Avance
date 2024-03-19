'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reaccionPublicacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      reaccionPublicacion.belongsTo(models.Publicacion,{foreignKey:"idPublicacion"})
    }
  }
  reaccionPublicacion.init({
    idPublicacion: DataTypes.INTEGER,
    tipo: DataTypes.STRING,
    idUsuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'reaccionPublicacion',
  });
  return reaccionPublicacion;
};