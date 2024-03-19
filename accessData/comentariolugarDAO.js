const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.json');

class ComentarioLugar extends Model { }

ComentarioLugar.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    idLugar: {
      type: DataTypes.INTEGER,
      references: {
        model: 'lugar',
        key: 'id',
      },
    },
    Comentario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha: {
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
    modelName: 'comentarioLugar',
  }
);

module.exports = ComentarioLugar;