const Servico = require("../models/Servico");

const getAllServicos = async (req, res) => {
  try {
    const servicos = await Servico.findAll();
    res.json(servicos);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar serviços", error: error.message });
  }
};

const getServicoById = async (req, res) => {
  try {
    const servico = await Servico.findByPk(req.params.id);
    if (!servico) return res.status(404).json({ message: "Serviço não encontrado" });
    res.json(servico);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar serviço", error: error.message });
  }
};

const createServico = async (req, res) => {
  try {
    const { nome, preco } = req.body;
    const novoServico = await Servico.create({ nome, preco });
    res.status(201).json(novoServico);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar serviço", error: error.message });
  }
};

const updateServico = async (req, res) => {
  try {
    const servico = await Servico.findByPk(req.params.id);
    if (!servico) return res.status(404).json({ message: "Serviço não encontrado" });

    const { nome, preco } = req.body;
    await servico.update({ nome, preco });
    res.json(servico);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar serviço", error: error.message });
  }
};

const deleteServico = async (req, res) => {
  try {
    const servico = await Servico.findByPk(req.params.id);
    if (!servico) return res.status(404).json({ message: "Serviço não encontrado" });

    await servico.destroy();
    res.json({ message: "Serviço removido com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao remover serviço", error: error.message });
  }
};

module.exports = {
  getAllServicos,
  getServicoById,
  createServico,
  updateServico,
  deleteServico,
};
