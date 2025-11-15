import { Endereco } from '../models/index.js';

const endereco = {
  criar: (dados) => Endereco.create(dados),
  listar: () => Endereco.findAll(),
  buscarPorId: (id) => Endereco.findByPk(id),
  atualizar: (id, dados) => Endereco.update(dados, { where: { id_endereco: id } }),
  deletar: (id) => Endereco.destroy({ where: { id_endereco: id } })
};

export default endereco