const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Cliente = require("./Cliente");

const Veiculo = sequelize.define("Veiculo", {
  marca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  modelo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  placa: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

Veiculo.belongsTo(Cliente, { foreignKey: "clienteId" });
Cliente.hasMany(Veiculo, { foreignKey: "clienteId" });

module.exports = Veiculo;
