const models = require("../../database/models");

const delFavorites = async (req, res) => {
  const userId = req.userId;
  try {
    const { bookId } = req.query;
    if (!bookId) {
      res.status(400).json({ message: "please check type and bookId in params" });
    }
    const user = await models.User.findOne({ where: { id: +userId } });
    const book = await models.Book.findOne({ where: { id: +bookId } });
    await book.removeUser(user);
    const books = await models.Book.findAll({
      include: [
        {
          model: models.User,
          as: "user",
          through: { where: { userId } },
          required: true,
        }
      ]
    });
    res.json(books)
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = delFavorites;