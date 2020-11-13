const multer = require('multer');
const models = require('../../database/models');

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
});

const multerConfig = multer({ storage: storageConfig }).single("bookImg");

const addBookAvatar = async (req, res, next) => {
  const bookIcon = "/uploads/" + req.file.filename;
  let filedata = req.file;
  const { name, author, description } = req.body;
  if (!filedata) {
    res.status(400).json("File is missing");
    return;
  }
  const userId = req.userId;
  try {
    await models.Book.create({author, name, bookIcon, userId, description});
    res.json('book created')
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
}
module.exports = [multerConfig, addBookAvatar]