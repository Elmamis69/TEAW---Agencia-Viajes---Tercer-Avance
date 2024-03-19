'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Publicacions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      contenido: {
        type: Sequelize.STRING
      },
      fecha: {
        type: Sequelize.DATE
      },
      idUsuario: {
        type: Sequelize.INTEGER, allowNull:false,references:{model:"Usuarios",key:"id"}
      },
      idDestino: {        
        type: Sequelize.INTEGER, allowNull:false,references:{model:"Destinos",key:"id"}
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
    await queryInterface.dropTable('Publicacions');
  }
};