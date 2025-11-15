import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Experiencia = sequelize.define('Experiencia', {
  id_experiencia: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  nome_empresa: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data_inicio: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  data_fim: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
}, {
  tableName: 'experiencias',
  timestamps: true,
  createdAt: 'criado_em',
  updatedAt: 'atualizado_em',
});

export default Experiencia;