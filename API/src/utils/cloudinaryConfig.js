import cloudinary from 'cloudinary';
import cloudinaryStorage from 'multer-storage-cloudinary';

cloudinary.config({
  cloud_name: 'dqyaazwe7',
  api_key: '979745235194575',
  api_secret: 'DSPznsOdDDBQiFdzC0D2b8FK-Ow'
});

const storage = cloudinaryStorage({
  cloudinary,
  folder: 'property/images',
  allowedFormats: ['jpg', 'png']
});

export default storage;
