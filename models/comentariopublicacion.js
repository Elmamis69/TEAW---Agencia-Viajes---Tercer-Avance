'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comentarioPublicacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      comentarioPublicacion.belongsTo(models.Publicacion,{foreignKey:"idPublicacion"})
    }
  }
  comentarioPublicacion.init({
    idPublicacion: DataTypes.INTEGER,
    Comentario: DataTypes.STRING,
    fecha: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'comentarioPublicacion',
  });
  return comentarioPublicacion;
};