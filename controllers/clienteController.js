const Cliente = require("../models/Cliente");

const getAllClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar clientes", error: error.message });
  }
};

const getClienteById = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) return res.status(404).json({ message: "Cliente não encontrado" });
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar cliente", error: error.message });
  }
};

const createCliente = async (req, res) => {
  try {
    const { nome, telefone, email } = req.body;
    const novoCliente = await Cliente.create({ nome, telefone, email });
    res.status(201).json(novoCliente);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar cliente", error: error.message });
  }
};

const updateCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) return res.status(404).json({ message: "Cliente não encontrado" });

    const { nome, telefone, email } = req.body;
    await cliente.update({ nome, telefone, email });
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar cliente", error: error.message });
  }
};

const deleteCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) return res.status(404).json({ message: "Cliente não encontrado" });

    await cliente.destroy();
    res.json({ message: "Cliente removido com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao remover cliente", error: error.message });
  }
};

module.exports = {
  getAllClientes,
  getClienteById,
  createCliente,
  updateCliente,
  deleteCliente,
};
