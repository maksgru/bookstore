const multer = require('multer');
const models = require('../../database/models');

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
});

const multerConfig = multer({ storage: storageConfig }).single("bookImage");

const addBookImage = async (req, res, next) => {
  const bookImage = "/uploads/" + req.file.filename;
  let filedata = req.file;
  if (!filedata) {
    res.status(400).json("File is missing");
    return;
  }
  const bookId = req.body.bookId
  try {
    const image = await models.Image.create({bookId, url: bookImage})
  if (!image) {
    res.status(500).json({message: 'server error'})
  }
  bookImages = await models.Image.findAll({ where: { bookId } });
    if (!bookImages) {
      res.status(404).json({ message: "images not found" });
    }
    res.json({bookImages});
  } catch (err) {
    res.status(500).json({message: err.message})
  }
}
module.exports = [multerConfig, addBookImage];