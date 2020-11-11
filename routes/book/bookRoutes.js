const express = require('express');

const router = express.Router();


router.get("/api/books", async (req, res) => {
  let books;
  try {
    books = await models.Book.findAll();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: "server error, please try again" });
  }
});
router.get("/api/books/id", async (req, res) => {
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

module.exports = router;