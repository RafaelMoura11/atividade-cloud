'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ordens_servico_servicos', [
      {
        ordensServicoId: 1,
        servicoId: 1,
        quantidade: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ordensServicoId: 1,
        servicoId: 2,
        quantidade: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ordens_servico_servicos', null, {});
  },
};
