import { habilidadeService } from '../service/habilidadesService.js';

export const habilidadeController = {
  criar: async (req, res) => {
    const habilidade = await habilidadeService.criar(req.body);
    res.status(201).json(habilidade);
  },
  listar: async (req, res) => {
    const habilidades = await habilidadeService.listar();
    res.json(habilidades);
  },
  buscarPorId: async (req, res) => {
    const habilidade = await habilidadeService.buscarPorId(req.params.id);
    res.json(habilidade);
  },
  atualizar: async (req, res) => {
    await habilidadeService.atualizar(req.params.id, req.body);
    const habilidade = await habilidadeService.buscarPorId(req.params.id);
    res.json(habilidade);
  },
  deletar: async (req, res) => {
    await habilidadeService.deletar(req.params.id);
    res.status(204).send();
  }
};

export default habilidadeController;