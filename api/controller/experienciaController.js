import { experienciaService } from '../service/experienciaService.js';

export const experienciaController = {
  criar: async (req, res) => {
    const experiencia = await experienciaService.criar(req.body);
    res.status(201).json(experiencia);
  },
  listar: async (req, res) => {
    const experiencias = await experienciaService.listar();
    res.json(experiencias);
  },
  buscarPorId: async (req, res) => {
    const experiencia = await experienciaService.buscarPorId(req.params.id);
    res.json(experiencia);
  },
  atualizar: async (req, res) => {
    await experienciaService.atualizar(req.params.id, req.body);
    const experiencia = await experienciaService.buscarPorId(req.params.id);
    res.json(experiencia);
  },
  deletar: async (req, res) => {
    await experienciaService.deletar(req.params.id);
    res.status(204).send();
  }
};

export default experienciaController;