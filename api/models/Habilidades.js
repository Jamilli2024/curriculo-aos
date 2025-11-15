import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Habilidade = sequelize.define('Habilidade', {
  id_habilidade: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  nome_habilidade: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nivel: {
    type: DataTypes.ENUM('iniciante', 'intermediario', 'avançado'),
    allowNull: false,
  },
}, {
  tableName: 'habilidades',
  timestamps: true,
  createdAt: 'criado_em',
  updatedAt: 'atualizado_em',
});

export default Habilidade;