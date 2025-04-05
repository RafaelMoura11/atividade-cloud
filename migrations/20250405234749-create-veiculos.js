'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('veiculos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      modelo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      placa: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      clienteId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'clientes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('veiculos');
  }
};
