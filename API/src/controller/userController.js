import bcrypt from 'bcrypt';
import helper from '../utils/helper';
import User from '../utils/userData';
import authMiddleware from '../middleware/authMiddleware';

class UserController {
  static async signupUser(req, res) {
    try {
      const {
        first_name,
        last_name,
        email,
        password,
        phoneNumber,
        address
      } = req.body;
      const hashedPassword = await helper.hashPassword(password);
      const getUserID = User[User.length - 1].id + 1;

      const is_admin = false;
      const user = {
        id: getUserID,
        first_name,
        last_name,
        email,
        password: hashedPassword,
        phoneNumber,
        address,
        is_admin
      };
      User.push(user);
      const token = authMiddleware.generateToken(getUserID, is_admin);
      return res.status(201).json({
        status: 'success',
        message: 'New user has been created',
        data: {
          token,
          id: getUserID,
          first_name,
          last_name,
          email,
          phoneNumber,
          address
        }
      });
    } catch (error) {
      return res.status(500).json({
        status: '500 Server internal error',
        error: 'Something went wrong while trying to create a user'
      });
    }
  }

  static async signinUser(req, res) {
    try {
      const { email, password } = req.body;
      const user = User.find(member => member.email === email);
      if (!user) {
        return res.status('401 Unauthorized').send('No user found.');
      }
      const passwordIsValid = await bcrypt.compare(password, user.password);
      if (!passwordIsValid) {
        return res.status(401).json({
          status: 'Unauthorized',
          message: 'Incorrect Password'
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
          email,
          is_admin
        }
      });
    } catch (error) {
      return res.status(500).json({
        status: 'Server internal error',
        message: 'Something went wrong while trying to process your request'
      });
    }
  }
}

export default UserController;
