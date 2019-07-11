import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();

class AuthMiddleware {
  static generateToken(id, is_admin) {
    return jwt.sign({ id, is_admin }, process.env.SECRET, { expiresIn: '24h' });
  }

  static verifyToken(req, res, next) {
    try {
      const token = req.headers.authorization;
      if (!token)
        return res.status(401).json({
          status: 'Unauthorized',
          error: 'Token is required'
        });
      const decoded = jwt.verify(token, process.env.SECRET);
      const { id, is_admin } = decoded;
      console.log(decoded);
      req.auth = { id, is_admin };

      next();
    } catch (err) {
      return res.status(401).json({
        status: 'Unauthorized',
        error: 'Token is invalid'
      });
    }
  }
}

export default AuthMiddleware;
