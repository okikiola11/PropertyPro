import db from './index';
import seeders from './seeders';

const createTables = async () => {
  const queryText = `
  DROP TABLE IF EXISTS users CASCADE;
  CREATE TABLE users(
    id SERIAL NOT NULL PRIMARY KEY,
    email VARCHAR(128) UNIQUE NOT NULL,
    first_name VARCHAR(128) NOT NULL,
    last_name VARCHAR(128) NOT NULL,
    password VARCHAR (355) NOT NULL,
    phone_number BIGINT NOT NULL,
    address VARCHAR(128) NOT NULL,
    is_admin BOOLEAN NOT NULL,
    created_on TIMESTAMP NOT NULL DEFAULT (NOW())
  );
  DROP TABLE IF EXISTS properties CASCADE;
  CREATE TABLE properties(
    id SERIAL NOT NULL PRIMARY KEY,
    owner INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    status VARCHAR(10) NOT NULL DEFAULT ('available'),
    price NUMERIC(200, 2) NOT NULL,
    state VARCHAR(128)  NOT NULL,
    city VARCHAR(128) NOT NULL,
    address VARCHAR(355) NOT NULL,
    type VARCHAR(128) NOT NULL,
    image_url VARCHAR(250) NOT NULL,
    created_on TIMESTAMP NOT NULL DEFAULT (NOW())
  );
  DROP TABLE IF EXISTS flags CASCADE;
  CREATE TABLE flags(
    id SERIAL NOT NULL PRIMARY KEY,
    property_id INT NOT NULL REFERENCES properties(id) ON DELETE CASCADE,
    reason VARCHAR(128) NOT NULL,
    description VARCHAR(600) NOT NULL,
    created_on TIMESTAMP NOT NULL DEFAULT (NOW())
  );
  `;

  try {
    await db.queryPool(queryText + seeders);
  } catch (err) {
    console.log(err);
  }
};

createTables();
