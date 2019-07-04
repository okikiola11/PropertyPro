import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

class Helpers {
  /**
   * @static hashPassword
   * @description hashes a password
   * @param { string } password
   * @returns hashed password
   */
  static async hashPassword(password) {
    return await bcrypt.hash(password, bcrypt.genSaltSync(8));
  }
}

export default Helpers;
