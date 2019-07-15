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
      console.log(error.stack);
      return res.status(404).json({
        status: 'Not found',
        error: 'No property found'
      });
    }
  }

  static async getSingleProperty(req, res) {
    try {
      const id = parseInt(req.params.id, 10);
      const singleProperty = Property.find(
        getProperty => getProperty.id === id
      );
      if (!singleProperty) {
        return res.status(404).json({
          status: 'Not found',
          error: 'Property Id not found'
        });
      }
      const {
        id: currentId,
        status,
        price,
        state,
        city,
        address,
        type,
        created_on,
        image_url,
        owner
      } = singleProperty;
      const {
        email: owner_email,
        phone_number: owner_phone_number
      } = userData.find(({ id: propertyId }) => propertyId === owner);
      const newProperty = {
        id: currentId,
        status,
        price,
        state,
        city,
        address,
        type,
        created_on,
        image_url,
        owner_email,
        owner_phone_number
      };

      return res.status(200).json({
        status: 200,
        message: 'Property has been successfully retrieved',
        data: newProperty
      });
    } catch (error) {
      return res.status(404).json({
        status: 'Not found',
        error: 'Property does not exist'
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

  // static async getPropertyType(req, res) {
  //   try {
  //     const { type } = req.query;
  //     const id = parseInt(req.params.id, 10);
  //   } catch (error) {}
  // }

  static async deleteProperty(req, res) {
    try {
      const id = parseInt(req.params.id, 10);
      const index = Property.findIndex(deletedData => deletedData.id === id);
      if (!index) {
        return res.status(404).json({
          status: 'Not found',
          error: 'Oooops! no record with such Property Id'
        });
      }
      Property.splice(index, 1);
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
