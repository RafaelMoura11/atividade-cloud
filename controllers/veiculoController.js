const Veiculo = require("../models/Veiculo");
const Cliente = require("../models/Cliente");

const getAllVeiculos = async (req, res) => {
  try {
    const veiculos = await Veiculo.findAll({ include: Cliente });
    res.json(veiculos);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar veículos", error: error.message });
  }
};

const getVeiculoById = async (req, res) => {
  try {
    const veiculo = await Veiculo.findByPk(req.params.id, { include: Cliente });
    if (!veiculo) return res.status(404).json({ message: "Veículo não encontrado" });
    res.json(veiculo);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar veículo", error: error.message });
  }
};

const createVeiculo = async (req, res) => {
  try {
    const { marca, modelo, placa, clienteId } = req.body;
    const novoVeiculo = await Veiculo.create({ marca, modelo, placa, clienteId });
    res.status(201).json(novoVeiculo);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar veículo", error: error.message });
  }
};

const updateVeiculo = async (req, res) => {
  try {
    const veiculo = await Veiculo.findByPk(req.params.id);
    if (!veiculo) return res.status(404).json({ message: "Veículo não encontrado" });

    const { marca, modelo, placa, clienteId } = req.body;
    await veiculo.update({ marca, modelo, placa, clienteId });
    res.json(veiculo);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar veículo", error: error.message });
  }
};

const deleteVeiculo = async (req, res) => {
  try {
    const veiculo = await Veiculo.findByPk(req.params.id);
    if (!veiculo) return res.status(404).json({ message: "Veículo não encontrado" });

    await veiculo.destroy();
    res.json({ message: "Veículo removido com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao remover veículo", error: error.message });
  }
};

module.exports = {
  getAllVeiculos,
  getVeiculoById,
  createVeiculo,
  updateVeiculo,
  deleteVeiculo,
};
