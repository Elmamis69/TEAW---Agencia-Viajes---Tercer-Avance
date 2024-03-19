'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class horario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      horario.belongsTo(models.itinerario,{foreignKey:"idItinerario"})
    }
  }
  horario.init({
    idItinerario: DataTypes.INTEGER,
    horarioActividad: DataTypes.STRING,
    Descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'horario',
  });
  return horario;
};