const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth/authRoutes");
const multer = require("multer");
const models = require("./database/models");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;
const isAuth = require('./middleware/auth');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/auth", authRoutes);

app.get("/api/books", async (req, res) => {
  let books;
  try {
    books = await models.Book.findAll();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: "server error, please try again" });
  }
});
app.get("/api/books/id", async (req, res) => {
  const id = req.query.id;
  try {
    const book = await models.Book.findOne({ where: { id: id } });
    if (!book) {
      res.status(404).json({ message: "book not found" });
      return;
    }
    bookImages = await models.Image.findAll({ where: { bookId: id } });
    if (!bookImages) {
      res.status(404).json({ message: "images not found" });
    }

    res.json({ book, bookImages });
  } catch (err) {
    res.status(500).json({ message: "server error, please try again", err });
  }
});

app.use(express.static(__dirname));
const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  // filename: (req, file, cb) => {
  //   cb(null, file.originalname);
  // },
});

// app.use();
app.post("/upload", isAuth, multer({ storage: storageConfig }).single("filedata"), async (req, res, next) => {
  // const url = req.protocol + "://" + req.get("host");
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

    await user.update({ userImg: profileImg }, { where: { id: userId } });
    return res.json({ profileImg });
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
});

app.listen(4000, () => console.log("server started"));
