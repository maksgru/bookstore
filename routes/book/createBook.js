const models = require("../../database/models");
const addBookAvatar = require("../upload/addBookAvatar");

const createBook = async (req, res) => {
  const { name, author, gener, price, description } = req.body;
  const bookIcon = req.bookIcon;
  const userId = req.userId;
  try {
    const writer = await models.Author.findOne({where: {name: author}});
    const authorId = writer.id;
    const book = await models.Book.create({authorId, name, bookIcon, price, userId, description});
    const bookGener = await models.Gener.findOne({where: {name: gener}});
    await book.addGener(bookGener);
    res.json('book created')
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
module.exports = [addBookAvatar, createBook];