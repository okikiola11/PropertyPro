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
}

export default Properties;
