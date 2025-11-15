import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Endereco = sequelize.define('Endereco', {
  id_endereco: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  estado: {
    type: DataTypes.CHAR(2),
    allowNull: false,
    comment: 'Sigla do estado (ex: PE, SP)',
  },
  cidade: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'enderecos',
  timestamps: true,
  createdAt: 'criado_em',
  updatedAt: 'atualizado_em',
});

export default Endereco;