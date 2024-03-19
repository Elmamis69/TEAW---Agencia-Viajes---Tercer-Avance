'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comentarioItinerario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      comentarioItinerario.belongsTo(models.itinerario,{foreignKey:"idItinerario"})
    }
  }
  comentarioItinerario.init({
    idItinerario: DataTypes.INTEGER,
    Comentario: DataTypes.STRING,
    Fecha: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'comentarioItinerario',
  });
  return comentarioItinerario;
};