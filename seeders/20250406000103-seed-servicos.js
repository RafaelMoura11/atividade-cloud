'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('servicos', [
      { nome: 'Troca de óleo', preco: 100.00, createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Alinhamento', preco: 80.00, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('servicos', null, {});
  },
};
