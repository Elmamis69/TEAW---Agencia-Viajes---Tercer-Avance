const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.json');

class ComentarioItinerario extends Model { }

ComentarioItinerario.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    idItinerario: {
      type: DataTypes.INTEGER,
      references: {
        model: 'itinerario',
        key: 'id',
      },
    },
    Comentario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comentarioItinerario',
  }
);

module.exports = ComentarioItinerario;