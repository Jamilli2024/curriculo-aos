import dotenv from 'dotenv';
import pg from 'pg';
import { Sequelize } from 'sequelize';

dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error('DATABASE_URL não está definida no ambiente.');
}

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: 'postgres',
  protocol: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  dialectModule: pg,
});

export default sequelize;