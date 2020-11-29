const models = require('../../database/models');

const getFavorites = async (req, res) => {
  const id = req.userId;
  const books = await models.Book.findAll({
    include: [
      {
        model: models.User,
        as: "user",
        through: { where: { userId: id } },
        required: true,
      }
    ]
  });
  res.json(books)
};
module.exports = getFavorites;