import { Habilidade } from '../models/index.js';

export const habilidadeService = {
  criar: (dados) => Habilidade.create(dados),
  listar: () => Habilidade.findAll(),
  buscarPorId: (id) => Habilidade.findByPk(id),
  atualizar: (id, dados) => Habilidade.update(dados, { where: { id_habilidade: id } }),
  deletar: (id) => Habilidade.destroy({ where: { id_habilidade: id } })
};