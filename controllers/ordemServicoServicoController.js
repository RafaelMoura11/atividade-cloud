const OrdemServico = require("../models/OrdemServico");
const Servico = require("../models/Servico");
const OrdemServicoServico = require("../models/OrdemServicoServico");

const getAll = async (req, res) => {
  try {
    const dados = await OrdemServicoServico.findAll({
      include: [OrdemServico, Servico]
    });
    res.json(dados);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar os dados", error: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const { ordemId, servicoId } = req.params;
    const registro = await OrdemServicoServico.findOne({
      where: { ordemServicoId: ordemId, servicoId },
      include: [OrdemServico, Servico]
    });

    if (!registro) return res.status(404).json({ message: "Relação não encontrada" });

    res.json(registro);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar a relação", error: error.message });
  }
};

const create = async (req, res) => {
  try {
    const { ordemServicoId, servicoId, quantidade } = req.body;
    const novaRelacao = await OrdemServicoServico.create({ ordemServicoId, servicoId, quantidade });
    res.status(201).json(novaRelacao);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar relação", error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { ordemId, servicoId } = req.params;
    const { quantidade } = req.body;

    const relacao = await OrdemServicoServico.findOne({
      where: { ordemServicoId: ordemId, servicoId }
    });

    if (!relacao) return res.status(404).json({ message: "Relação não encontrada" });

    await relacao.update({ quantidade });
    res.json(relacao);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar a relação", error: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const { ordemId, servicoId } = req.params;
    const relacao = await OrdemServicoServico.findOne({
      where: { ordemServicoId: ordemId, servicoId }
    });

    if (!relacao) return res.status(404).json({ message: "Relação não encontrada" });

    await relacao.destroy();
    res.json({ message: "Relação removida com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao remover a relação", error: error.message });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
