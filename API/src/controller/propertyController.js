import cloud from '../utils/cloudinaryConfig';
import userData from '../utils/userData';
import Property from '../model/propertyModel';

class PropertyController {
  static async postProperty(req, res) {
    try {
      const { price, state, city, address, type, image_url } = req.body;
      const { id } = req.auth; //get owner ID from user table

      const newPrice = parseFloat(price);
      const newProperty = await Property.SaveProperty(
        id,
        price,
        state,
        city,
        address,
        type,
        image_url
      );

      return res.status(201).json({
        status: 'success',
        message: 'Property advert has been created',
        data: newProperty
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
      const id = parseInt(req.params.propertyId, 10);
      const { price } = req.body;
      const property = await Property.updateProperty(price, id);
      const {
        status,
        type,
        state,
        city,
        address,
        created_on,
        image_url
      } = property;

      return res.status(200).json({
        status: 'success',
        message: 'Property has been succesfully updated',
        data: {
          id,
          status,
          type,
          state,
          city,
          address,
          created_on,
          image_url
        }
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
      const properties = await Property.getAllProperties();
      if (properties.length === 0) {
        return res.status(200).json({
          status: 'success',
          message: 'There are no existing properties',
          data: properties
        });
      }
      return res.status(200).json({
        status: 'success',
        message: 'Successfully retrieved all properties',
        data: properties
      });
    } catch (error) {
      return res.status(404).json({
        status: 'Not found',
        error: 'No property found'
      });
    }
  }

  static async getSingleProperty(req, res) {
    try {
      const id = parseInt(req.params.id, 10);
      const property = await Property.getSingleProperty(id);
      if (!property) {
        throw new Error('Property does not exist');
      }
      const { owner } = property;
      if (owner !== req.auth.id) {
        throw new Error('Unauthorized');
      }
      return res.status(200).json({
        status: 'success',
        message: 'Property has been retrieved successfully',
        data: [property]
      });
    } catch (error) {
      console.log(error.stack);
      if (error.message === 'Property does not exist') {
        return res.status(404).json({
          status: 'Not found',
          error: 'Property does not exist'
        });
      }
      if (error.message === 'Unauthorized') {
        return res.status(403).json({
          status: 'Forbidden',
          error: 'This property does not belong to you'
        });
      }
      return res.status(500).json({
        status: 'Server internal error',
        error: 'Something went wrong while trying to retrieve property'
      });
    }
  }

  static async markSoldProperty(req, res) {
    try {
      const id = parseInt(req.params.id, 10);

      const getProperty = Property.find(findPropId => findPropId.id === id);
      if (!getProperty) {
        return res.status(404).json({
          status: 'Not found',
          error: 'Oooops! no record with such Property Id'
        });
      }
      const newlyCreatedPropertyDetails = {
        id: getProperty.id,
        status: 'sold',
        owner: getProperty.owner,
        type: getProperty.type,
        state: getProperty.state,
        city: getProperty.city,
        address: getProperty.address,
        price: getProperty.price,
        created_on: getProperty.created_on,
        image_url: getProperty.image_url
      };
      const indexValue = Property.findIndex(propIndex => propIndex.id === id);
      Property.splice(indexValue, 1, newlyCreatedPropertyDetails);
      return res.status(200).json({
        status: 'success',
        success: 'Property has being updated successfully',
        data: {
          id,
          status: 'sold',
          type: getProperty.type,
          state: getProperty.state,
          city: getProperty.city,
          address: getProperty.address,
          price: getProperty.price,
          created_on: getProperty.created_on,
          image_url: getProperty.image_url
        }
      });
    } catch (error) {
      return res.status(500).json({
        status: 'internal server error',
        error: 'Something went wrong while trying to update your property'
      });
    }
  }

  static async deleteProperty(req, res) {
    try {
      const id = parseInt(req.params.id, 10);
      const deletedProperty = await Property.deleteProperty(id);
      if (!deletedProperty) {
        return res.status(404).json({
          status: 'Not found',
          error: 'Oooops! no record with such Property Id'
        });
      }
      return res.status(200).json({
        status: 'success',
        message: 'Property has been deleted successfully'
      });
    } catch (error) {
      return res.status(500).send({
        status: 'Server internal error',
        error:
          'Something went wrong while trying to delete the property, try again'
      });
    }
  }
}

export default PropertyController;
