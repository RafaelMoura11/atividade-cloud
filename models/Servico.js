const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Servico = sequelize.define("servico", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  preco: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Servico;
