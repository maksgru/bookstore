const multer = require("multer");
const models = require('../../database/models');
const fs = require('fs')
const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
});

const multerConfig = multer({ storage: storageConfig }).single("filedata");

const addUserAvatar = async (req, res, next) => {
  const profileImg = "/uploads/" + req.file.filename;
  let filedata = req.file;
  if (!filedata) {
    res.status(400).send("File is missing");
    return;
  }

  const userId = req.userId;
  let user;
  try {
    user = await models.User.findOne({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    try {
      if (user.userImg) {

        fs.unlinkSync(`.${user.userImg}`)
      }
      //file removed
    } catch(err) {
      return res.status(500).json({ message: error.message });
    }
    await user.update({ userImg: profileImg });
    return res.json(profileImg);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = [multerConfig, addUserAvatar];