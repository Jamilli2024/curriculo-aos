import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Usuario = sequelize.define('Usuario', {
  id_usuario: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  telefone_celular: {
    type: DataTypes.CHAR(11),
    allowNull: false,
    comment: 'Número de celular com DDD (11 dígitos)',
  },
}, {
  tableName: 'usuarios',
  timestamps: true,
  createdAt: 'criado_em',
  updatedAt: 'atualizado_em',
});

export default Usuario;