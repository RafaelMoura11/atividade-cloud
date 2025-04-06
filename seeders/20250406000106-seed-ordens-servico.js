'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ordens_servico', [
      {
        veiculoId: 1,
        dataEntrada: new Date(),
        dataSaida: null,
        status: 'PENDENTE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ordens_servico', null, {});
  },
};
