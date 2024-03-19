'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ResenaLugars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NombreLugar: {
        type: Sequelize.STRING
      },
      Calificacion: {
        type: Sequelize.INTEGER
      },
      Fecha: {
        type: Sequelize.DATE
      },
      idUsuario: {
        type: Sequelize.INTEGER, allowNull:false,references:{model:"Usuarios",key:"id"}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ResenaLugars');
  }
};