const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Cliente = sequelize.define("cliente", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Cliente;
