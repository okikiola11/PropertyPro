import multer from 'multer';
import storage from '../utils/cloudinaryConfig';

const upload = multer({ storage, limits: { fileSize: 800000 } }).single(
  'image_url'
);

const uploader = (req, res, next) => {
  upload(req, res, function(err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({
        status: 'Bad Request',
        error: 'The uploaded file size limit has been exceeded'
      });
    } else if (err) {
      return res.status(500).json({
        status: 'Internal server error ',
        error: 'Something went wrong while trying to process your request.'
      });
    }
    if (req.file) req.body.image_url = req.file.image_url;
    next();
  });
};

export default uploader;
