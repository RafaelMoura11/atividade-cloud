'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('clientes', [
      {
        nome: 'Rafael Moura',
        telefone: '11999999999',
        email: 'rafael@email.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Amália Nascimento',
        telefone: '11888888888',
        email: 'amalia@email.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Amanda Aguiar',
        telefone: '11888888888',
        email: 'amanda@email.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Luana Martins',
        telefone: '11888888888',
        email: 'luana@email.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Abraão Saraiva',
        telefone: '11888888888',
        email: 'abraao@email.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clientes', null, {});
  },
};
