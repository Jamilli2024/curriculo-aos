import enderecoService from '../service/enderecoService.js';

export const enderecoController = {
  criar: async (req, res) => {
    const enderecoResposta = await enderecoService.criar(req.body);
    res.status(201).json(enderecoResposta);
  },
  listar: async (req, res) => {
    const enderecoResposta = await enderecoService.listar();
    res.json(enderecoResposta);
  },
  buscarPorId: async (req, res) => {
    const enderecoResposta = await enderecoService.buscarPorId(req.params.id);
    res.json(enderecoResposta);
  },
  atualizar: async (req, res) => {
    await enderecoService.atualizar(req.params.id, req.body);
    const enderecoResposta = await enderecoService.buscarPorId(req.params.id);
    res.json(enderecoResposta);
  },
  deletar: async (req, res) => {
    await enderecoService.deletar(req.params.id);
    res.status(204).send();
  }
};

export default enderecoController;