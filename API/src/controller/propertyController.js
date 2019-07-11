import cloud from '../utils/cloudinaryConfig';
import userData from '../utils/userData';
import Property from '../utils/propertyData';
import propertyModel from '../model/propertyModel';

class PropertyController {
  static async postProperty(req, res) {
    try {
      const { price, state, city, address, type } = req.body;
      const { id: owner } = req.auth; //get owner ID from user table
      console.log(req.auth);
      const {
        public_id: image_id,
        url: image_url,
        originalname: image_name
      } = req.file;

      const newPrice = parseFloat(price);
      const newlyCreatedProperty = {
        id: Property[Property.length - 1].id + 1,
        owner,
        newPrice,
        state,
        city,
        address,
        type,
        status: 'available',
        created_on: new Date().toLocaleString(),
        image_url,
        image_id,
        image_name
      };
      Property.push(newlyCreatedProperty);

      return res.status(201).json({
        status: 'success',
        message: 'Property advert has been created',
        data: [newlyCreatedProperty]
      });
    } catch (error) {
      console.log(error.stack);
      return res.status(500).json({
        status: 'Server internal error',
        error: 'Something went wrong while trying to create a property advert'
      });
    }
  }
}

export default PropertyController;
