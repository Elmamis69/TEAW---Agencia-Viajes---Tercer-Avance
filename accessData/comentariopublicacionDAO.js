const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.json');

class ComentarioPublicacion extends Model { }

ComentarioPublicacion.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    idPublicacion: {
      type: DataTypes.INTEGER,
      references: {
        model: 'publicacion',
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
    modelName: 'comentarioPublicacion',
  }
);

module.exports = ComentarioPublicacion;