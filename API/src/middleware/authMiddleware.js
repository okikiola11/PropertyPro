import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();

class AuthMiddleware {
  static generateToken(id, is_admin) {
    return jwt.sign({ id, is_admin }, process.env.SECRET, { expiresIn: '24h' });
  }
}

export default AuthMiddleware;
