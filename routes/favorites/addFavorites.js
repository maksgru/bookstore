const models = require("../../database/models");

const addFavorites = async (req, res) => {
  const userId = req.userId;
  try {
    const { bookId } = req.body;
    if (!bookId) {
      res.status(400).json({ message: "check params" });
    }
    const user = await models.User.findOne({ where: { id: +userId } });
    const book = await models.Book.findOne({ where: { id: +bookId } });
    book.addUser(user);
    res.json("book added to favorites");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = addFavorites;