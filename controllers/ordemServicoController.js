const OrdemServico = require("../models/OrdemServico");
const Veiculo = require("../models/Veiculo");

const getAllOrdens = async (req, res) => {
  try {
    const ordens = await OrdemServico.findAll({
      include: [Veiculo]
    });
    res.json(ordens);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar ordens de serviço", error: error.message });
  }
};

const getOrdemById = async (req, res) => {
  try {
    const ordem = await OrdemServico.findByPk(req.params.id, {
      include: [Veiculo]
    });
    if (!ordem) return res.status(404).json({ message: "Ordem de serviço não encontrada" });
    res.json(ordem);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar ordem de serviço", error: error.message });
  }
};

const createOrdem = async (req, res) => {
  try {
    const { dataEntrada, dataSaida, status, veiculoId } = req.body;
    const novaOrdem = await OrdemServico.create({ dataEntrada, dataSaida, status, veiculoId });
    res.status(201).json(novaOrdem);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar ordem de serviço", error: error.message });
  }
};

const updateOrdem = async (req, res) => {
  try {
    const ordem = await OrdemServico.findByPk(req.params.id);
    if (!ordem) return res.status(404).json({ message: "Ordem de serviço não encontrada" });

    const { dataEntrada, dataSaida, status, veiculoId } = req.body;
    await ordem.update({ dataEntrada, dataSaida, status, veiculoId });
    res.json(ordem);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar ordem de serviço", error: error.message });
  }
};

const deleteOrdem = async (req, res) => {
  try {
    const ordem = await OrdemServico.findByPk(req.params.id);
    if (!ordem) return res.status(404).json({ message: "Ordem de serviço não encontrada" });

    await ordem.destroy();
    res.json({ message: "Ordem de serviço removida com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao remover ordem de serviço", error: error.message });
  }
};

module.exports = {
  getAllOrdens,
  getOrdemById,
  createOrdem,
  updateOrdem,
  deleteOrdem,
};
