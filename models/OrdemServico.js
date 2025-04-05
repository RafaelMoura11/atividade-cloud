const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Veiculo = require("./Veiculo");

const OrdemServico = sequelize.define("OrdemServico", {
  dataEntrada: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  dataSaida: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "Pendente",
  },
});

OrdemServico.belongsTo(Veiculo, { foreignKey: "veiculoId" });
Veiculo.hasMany(OrdemServico, { foreignKey: "veiculoId" });

module.exports = OrdemServico;
