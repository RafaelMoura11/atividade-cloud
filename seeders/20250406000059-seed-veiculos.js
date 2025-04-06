'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('veiculos', [
      { modelo: 'Fiat Uno', placa: 'ABC1234', clienteId: 1, createdAt: new Date(), updatedAt: new Date() },
      { modelo: 'Civic 2020', placa: 'XYZ5678', clienteId: 2, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('veiculos', null, {});
  },
};
