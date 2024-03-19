'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publicacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Publicacion.belongsTo(models.Usuario,{foreignKey:"idUsuario"})
      Publicacion.belongsTo(models.Destino,{foreignKey:"idDestino"})
      Publicacion.hasMany(models.comentarioPublicacion,{foreignKey:"idPublicacion"})
      Publicacion.hasMany(models.reaccionPublicacion,{foreignKey:"idPublicacion"})
    }
  }
  Publicacion.init({
    contenido: DataTypes.STRING,
    fecha: DataTypes.DATE,
    idUsuario: DataTypes.INTEGER,
    idDestino: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Publicacion',
  });
  return Publicacion;
};