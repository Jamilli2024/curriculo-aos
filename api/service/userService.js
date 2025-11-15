import { Usuario } from '../models/index.js';

export const usuarioService = {
  criar: (dados) => Usuario.create(dados),
  listar: () => Usuario.findAll(),
  buscarPorId: (id) => Usuario.findByPk(id),
  atualizar: (id, dados) => Usuario.update(dados, { where: { id_usuario: id } }),
  deletar: (id) => Usuario.destroy({ where: { id_usuario: id } })
};