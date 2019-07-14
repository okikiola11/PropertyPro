import bcrypt from 'bcrypt';
import helper from '../utils/helper';
import User from '../model/userModel';
import authMiddleware from '../middleware/authMiddleware';

class UserController {
  static async signupUser(req, res) {
    try {
      const {
        first_name,
        last_name,
        email,
        password,
        phone_number,
        address,
        is_admin
      } = req.body;
      const member = await User.findByEmail(email);
      if (member) {
        return res.status(409).json({
          status: 'Conflict',
          error: 'Email already exist'
        });
      }

      const hashed_password = await helper.hashPassword(password);
      const user = await User.SaveUser(
        first_name,
        last_name,
        email,
        hashed_password,
        phone_number,
        address,
        is_admin || false
      );
      const { id } = user;

      const token = authMiddleware.generateToken(id, is_admin);
      return res.status(201).json({
        status: 'success',
        message: 'New user has been created',
        data: {
          token,
          id,
          first_name,
          last_name,
          email,
          phone_number,
          address
        }
      });
    } catch (error) {
      return res.status(500).json({
        status: 'Server internal error',
        error: 'Something went wrong while trying to create a user'
      });
    }
  }

  static async signinUser(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findByEmail(email);
      if (!user) {
        return res.status(404).json({
          status: 'error',
          error: 'User not found'
        });
      }
      const passwordIsValid = await bcrypt.compare(
        password,
        user.hashed_password
      );
      if (!passwordIsValid) {
        return res.status(401).json({
          status: 'Unauthorized',
          error: 'Incorrect Password'
        });
      }
      const { id, is_admin, first_name, last_name } = user;
      const token = authMiddleware.generateToken(id, is_admin);
      return res.status(200).json({
        status: 'success',
        message: `Welcome ${user.email}, you have successfully logged in`,
        data: {
          token,
          id,
          first_name,
          last_name,
          email
        }
      });
    } catch (error) {
      return res.status(500).json({
        status: 'Server internal error',
        error: 'Something went wrong while trying to process your request'
      });
    }
  }
}

export default UserController;
