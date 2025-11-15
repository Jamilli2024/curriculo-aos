import { Usuario } from '../models/index.js';

export const usuarioService = {
  criar: (dados) => Usuario.create(dados),
  listar: () => Usuario.findAll(),
  buscarPorId: (id) => Usuario.findByPk(id),
  atualizar: (id, dados) => Usuario.update(dados, { where: { id_usuario: id } }),
  deletar: (id) => Usuario.destroy({ where: { id_usuario: id } }),
  
  buscarEndereco: (id) => 
    Usuario.findByPk(id, {
      include: [{ model: Endereco, as: 'endereco' }]
    }),

  buscarExperiencias: (id) => 
    Usuario.findByPk(id, {
      include: [{ model: Experiencia, as: 'experiencias' }]
    }),
  buscarHabilidades: (id) => 
    Usuario.findByPk(id, {
      include: [{ model: Habilidade, as: 'habilidades' }]
    }),
  buscarCompleto: (id) =>
    Usuario.findByPk(id, {
      include: [
        { model: Endereco, as: 'endereco' },
        { model: Experiencia, as: 'experiencias' },
        { model: Habilidade, as: 'habilidades' }
      ]
    })
};