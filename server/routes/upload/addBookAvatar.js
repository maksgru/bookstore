const multer = require('multer');

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
});

const multerConfig = multer({ storage: storageConfig }).single("bookImg");

const addBookAvatar = (req, res, next) => {
  const bookIcon = "/uploads/" + req.file.filename;
  let filedata = req.file;
  if (!filedata) {
    res.status(400).json("File is missing");
    return;
  }
  req.bookIcon = bookIcon;
  next();
}
module.exports = [multerConfig, addBookAvatar];