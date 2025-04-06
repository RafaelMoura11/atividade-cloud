const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const OrdemServico = require("./OrdemServico");
const Servico = require("./Servico");

const OrdemServicoServico = sequelize.define("ordens_servico_servico", {
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  }
});

OrdemServico.belongsToMany(Servico, { through: OrdemServicoServico });
Servico.belongsToMany(OrdemServico, { through: OrdemServicoServico });

module.exports = OrdemServicoServico;
