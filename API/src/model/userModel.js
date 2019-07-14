import db from '../db/index';

class User {
  static async SaveUser(
    first_name,
    last_name,
    email,
    hashed_password,
    phone_number,
    address,
    is_admin
  ) {
    const query = `INSERT INTO
            users(first_name, last_name, email, hashed_password, phone_number, address, is_admin)
            VALUES($1, $2, $3, $4, $5, $6, $7)
            returning *`;
    const values = [
      first_name,
      last_name,
      email,
      hashed_password,
      phone_number,
      address,
      is_admin
    ];
    const { rows } = await db.query(query, values);

    return rows[0];
  }

  static async findByEmail(email) {
    const query = `
            SELECT * FROM users WHERE email = $1
        `;
    const values = [email];
    const { rows } = await db.query(query, values);
    return rows[0];
  }

  static async findById(id) {
    const query = `
            SELECT * FROM users WHERE id = $1
        `;
    const values = [id];
    const { rows } = await db.query(query, values);
    return rows[0];
  }
}

export default User;
