'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('clientes', [
      {
        nome: 'João Silva',
        telefone: '11999999999',
        email: 'joao@email.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Maria Oliveira',
        telefone: '11888888888',
        email: 'maria@email.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clientes', null, {});
  },
};
