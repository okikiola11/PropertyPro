import { Pool } from 'pg';
import { config } from 'dotenv';

config();

const pool = new Pool({
  connectionString: process.env.ELEPHANTSQL
});

export default {
  query: (text, params) => pool.query(text, params),
  queryPool: text => pool.query(text)
};
