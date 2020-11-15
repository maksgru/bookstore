const models = require('../../database/models');


const patchBook = async (req, res) => {
  const bookId = req.body.params.id;
  const { description } = req.body;
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
};
module.exports = patchBook;