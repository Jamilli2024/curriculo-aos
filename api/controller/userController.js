import { usuarioService } from '../service/userService.js';

export const usuarioController = {
  criar: async (req, res) => {
    const usuario = await usuarioService.criar(req.body);
    res.status(201).json(usuario);
  },
  listar: async (req, res) => {
    const usuarios = await usuarioService.listar();
    res.json(usuarios);
  },
  buscarPorId: async (req, res) => {
    const usuario = await usuarioService.buscarPorId(req.params.id);
    res.json(usuario);
  },
  atualizar: async (req, res) => {
    await usuarioService.atualizar(req.params.id, req.body);
    const usuario = await usuarioService.buscarPorId(req.params.id);
    res.json(usuario);
  },
  deletar: async (req, res) => {
    await usuarioService.deletar(req.params.id);
    res.status(204).send();
  },
  buscarEndereco: async (req, res) => {
    const usuario = await usuarioService.buscarEndereco(req.params.id);
    res.json(usuario.endereco);
  },

  buscarExperiencias: async (req, res) => {
    const usuario = await usuarioService.buscarExperiencias(req.params.id);
    res.json(usuario.experiencias);
  },

  buscarHabilidades: async (req, res) => {
    const usuario = await usuarioService.buscarHabilidades(req.params.id);
    res.json(usuario.habilidades);
  },

  buscarCompleto: async (req, res) => {
    const usuario = await usuarioService.buscarCompleto(req.params.id);
    res.json(usuario);
  }
};

export default usuarioController;