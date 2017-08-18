import multer from 'multer'

const storage = multer.memoryStorage(),
      upload = multer({ storage: storage });

// exports.upload = upload;

export default upload