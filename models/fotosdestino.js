'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fotosDestino extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      fotosDestino.belongsTo(models.Destino,{foreignKey:"idDestino"})
    }
  }
  fotosDestino.init({
    idDestino: DataTypes.INTEGER,
    foto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'fotosDestino',
  });
  return fotosDestino;
};