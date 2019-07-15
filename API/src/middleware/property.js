import db from '../db';
import PropertyModel from '../model/propertyModel';

class Middleware {
  /** @description checks for availability and ownership of a users property */
  static async findPropertyId(req, res, next) {
    try {
      const { propertyId } = req.params; //get property id
      const { id } = req.auth; //get user id
      const prop = await PropertyModel.findPropertyId(propertyId);
      req.property = prop;
      if (!prop) {
        return res.status(404).json({
          status: 'Not found',
          error: 'No property found'
        });
      }
      if (prop.owner !== id) {
        return res.status(401).json({
          status: 'Unauthorized',
          error: 'This property does not belong to you'
        });
      }
    } catch (error) {
      return res.status(500).json({
        status: 'Server internal error',
        error: 'Something went while trying to update property 234'
      });
    }

    next();
  }
}

export default Middleware;
