const models = require('../../database/models');

const getBook = async (req, res) => {
  const id = req.params.id.replace(':','');
  try {
    const book = await models.Book.findOne({ 
      where: { id: id },
      include: [{
        model: models.Author,
        as: "writer",
        attributes: ["name"],
      },
      {
        model: models.Review,
        as: 'reviews'
      }]
    });
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
};
module.exports = getBook;
