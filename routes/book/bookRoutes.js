const express = require("express");
const models = require("../../database/models");
const router = express.Router();

router.get("/", async (req, res) => {
  let books;
  try {
    books = await models.Book.findAll();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: "server error, please try again" });
  }
});
router.get("/id", async (req, res) => {
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

router.patch("/id", async (req, res) => {
  const bookId = req.body.params.id;
  const { description } = req.body;
  console.log(description)
  try {
    const book = await models.Book.findOne({ where: { id: bookId } });
    if (!book) {
      res.status(404).json({ message: "book not found" });
      return;
    }
    await book.update({ description });
    return res.json(description);
  } catch (err) {
    res.status(500).json({ message: "server error, please try again", err });
  }
});

module.exports = router;
