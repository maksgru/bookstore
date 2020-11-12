const express = require('express');
const multer = require("multer");
const models = require("../../database/models");
const isAuth = require("../../middleware/auth");
const router = express.Router();

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
});

router.post("/userimg", isAuth, multer({ storage: storageConfig }).single("filedata"), async (req, res, next) => {
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

      await user.update({ userImg: profileImg });
      return res.json({ profileImg });
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  }
);

router.post("/book", isAuth, multer({ storage: storageConfig }).single("bookImg"), async (req, res, next) => {
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
);

module.exports = router;