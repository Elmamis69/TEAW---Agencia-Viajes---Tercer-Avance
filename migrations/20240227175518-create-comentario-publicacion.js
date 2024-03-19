module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('comentarioPublicacions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idPublicacion: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Publicacions", key: "id" } // Cambiar a 'Publicacions'
      },
      Comentario: {
        type: Sequelize.STRING
      },
      fecha: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('comentarioPublicacions');
  }
};
