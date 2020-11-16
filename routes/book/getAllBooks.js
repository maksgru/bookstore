const models = require('../../database/models');

const getAllBooks = async (req, res) => {
  let books;
  const { sortTarget = 'name', direction='ASC' } = req.query;
  // let where = {};
  // if (query.smth) {
  //   where.smth = 'ASC';
  // }
  try {
    books = await models.Book.findAll({
      // where,
      order: [
        [sortTarget, direction]
      ]
    });
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: "server error, please try again" });
  }
};
module.exports = getAllBooks;