import cloud from '../utils/cloudinaryConfig';
import userData from '../utils/userData';
import Property from '../utils/propertyData';

class PropertyController {
  static async postProperty(req, res) {
    try {
      const { price, state, city, address, type } = req.body;
      const { id: owner } = req.auth; //get owner ID from user table
      const {
        public_id: image_id,
        url: image_url,
        originalname: image_name
      } = req.file;

      const newPrice = parseFloat(price);
      const newlyCreatedProperty = {
        id: Property[Property.length - 1].id + 1,
        owner,
        price: newPrice,
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
      return res.status(500).json({
        status: 'Server internal error',
        error: 'Something went wrong while trying to create a property advert'
      });
    }
  }

  static async updateProperty(req, res) {
    try {
      const { id } = req.params;
      const { price, state, city, address, type, status } = req.body;
      const property = Property.find(propId => propId.id === parseInt(id, 10));
      if (!property) {
        return res.status(404).json({
          status: 404,
          error: 'Property Id not found'
        });
      }
      let image_id, image_url, image_name;
      if (req.file) {
        const { public_id, url, originalname } = req.file;
        image_id = public_id;
        image_url = url;
        image_name = originalname;
      }

      const updatedProperty = {
        id: property.id,
        owner: property.owner,
        price: price || property.price,
        state: state || property.state,
        city: city || property.city,
        address: address || property.address,
        type: type || property.type,
        status: status || property.status,
        image_id: image_id || property.image_id,
        image_url: image_url || property.image_url,
        image_name: image_name || property.image_name,
        created_on: property.created_on
      };
      const index = Property.findIndex(
        propId => propId.id === parseInt(id, 10)
      );
      Property.splice(index, 1, updatedProperty);
      return res.status(200).json({
        status: 'success',
        success: 'Property has being created successfully',
        data: [updatedProperty]
      });
    } catch (error) {
      return res.status(500).json({
        status: 'internal server error',
        error: 'Something went wrong while trying to update your property'
      });
    }
  }

  static async getAllProperties(req, res) {
    try {
      return res.status(200).send({
        status: 'success',
        message: 'Successfully retrieved all properties',
        data: [Property]
      });
    } catch (error) {
      return res.status(404).json({
        status: 404,
        error: 'No property found'
      });
    }
  }
}

export default PropertyController;
