import db from '../db/index';

class Properties {
  static async SaveProperty(
    owner,
    price,
    state,
    city,
    address,
    type,
    image_url
  ) {
    const query = `
            INSERT INTO
            properties(
              owner, price, state, city, address, type, image_url)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            returning *
        `;
    const values = [owner, price, state, city, address, type, image_url];
    const { rows } = await db.query(query, values);

    return rows[0];
  }

  static async updateProperty(price, id) {
    const query = `
        UPDATE properties SET price = $1 WHERE id = $2 RETURNING *
    `;
    const values = [price, id];
    const { rows } = await db.query(query, values);
    return rows[0];
  }

  static async findPropertyId(id) {
    const query = `
        SELECT * FROM properties WHERE id = $1
    `;
    const values = [id];
    const { rows } = await db.query(query, values);
    return rows[0];
  }

  static async getAllProperties() {
    const query = `
      SELECT properties.id,
      properties.status,
      properties.type,
      properties.state,
      properties.city,
      properties.address,
      properties.price,
      properties.created_on,
      properties.image_url,
      users.email owner_email,
      users.phone_number owner_phone_number
      FROM
      properties
      INNER JOIN users ON users.id = properties.owner
    `;
    const { rows } = await db.queryPool(query);
    return rows;
  }

  static async getSingleProperty(id) {
    const query = `
      SELECT properties.id,
      properties.status,
      properties.type,
      properties.state,
      properties.city,
      properties.address,
      properties.price,
      properties.created_on,
      properties.image_url,
      users.email owner_email,
      users.phone_number owner_phone_number
      FROM
      properties
      INNER JOIN users ON users.id = properties.owner WHERE properties.id = $1
    `;
    const values = [id];
    const { rows } = await db.query(query, values);
    return rows[0];
  }

  static async updateMarkProperty(id) {
    const query = `
        UPDATE properties SET status = $1 WHERE id = $2 RETURNING *
    `;
    const values = ['sold', id];
    const { rows } = await db.query(query, values);
    return rows[0];
  }

  static async deleteProperty(id) {
    const query = `
        DELETE FROM properties WHERE id = $1 RETURNING *;
    `;
    const values = [id];
    const { rows } = await db.query(query, values);

    return rows[0];
  }
}

export default Properties;
