const models = require('../../database/models');

const getAllBooks = async (req, res) => {
  let books;
  try {
    books = await models.Book.findAll();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: "server error, please try again" });
  }
};
module.exports = getAllBooks;