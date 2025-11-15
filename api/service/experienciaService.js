import { Experiencia } from '../models/index.js';

export const experienciaService = {
  criar: (dados) => Experiencia.create(dados),
  listar: () => Experiencia.findAll(),
  buscarPorId: (id) => Experiencia.findByPk(id),
  atualizar: (id, dados) => Experiencia.update(dados, { where: { id_experiencia: id } }),
  deletar: (id) => Experiencia.destroy({ where: { id_experiencia: id } })
};