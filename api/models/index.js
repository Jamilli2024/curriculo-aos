import Endereco from './Endereco.js';
import Experiencia from './Experiencia.js';
import Habilidade from './Habilidades.js';
import Usuario from './Usuario.js';


Usuario.hasMany(Habilidade, { foreignKey: 'id_usuario', as: 'habilidades' });
Habilidade.belongsTo(Usuario, { foreignKey: 'id_usuario', as: 'usuario' });

Usuario.hasMany(Experiencia, { foreignKey: 'id_usuario', as: 'experiencias' });
Experiencia.belongsTo(Usuario, { foreignKey: 'id_usuario', as: 'usuario' });

Usuario.hasOne(Endereco, { 
  foreignKey: 'id_usuario', 
  as: 'endereco',
  onDelete: 'CASCADE' 
});
Endereco.belongsTo(Usuario, { foreignKey: 'id_usuario', as: 'usuario' });


export { Endereco, Experiencia, Habilidade, Usuario };

