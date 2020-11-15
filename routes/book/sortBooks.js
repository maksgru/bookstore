const models = require('../../database/models');

const sortBooks = async (req, res) => {
  const { sortTarget, type } = req.query;
  try {
    const sortedBooks = await models.Book.findAll({
      order: [
        [sortTarget, type]
      ]
    })
    res.json(sortedBooks);
  } catch (error) {
    res.statu(500).json({message: error.message})
  }
};
module.exports = sortBooks;