const { Op } = require("sequelize");
const models = require("../../database/models");

const getGenerId = async (generName) => {
  const gener = await models.Gener.findOne({ where: { name: generName } });
  return gener.id;
};

const getAllBooks = async (req, res) => {
  let books;
  let {
    sortTarget = "name",
    direction = "ASC",
    limit = 10,
    page = 1
  } = req.query;
  if (sortTarget === 'rating' && direction === 'ASC') direction = 'ASC NULLS FIRST';
  if (sortTarget === 'rating' && direction === 'DESC') direction = 'DESC NULLS LAST';
  let where = {};
  let include = [
    {
      model: models.Author,
      as: "writer",
      attributes: ["name"],
    }
  ];
  if (req.userId) {
    include.push({
      model: models.User,
      as: "user",
      through: { where: { userId: req.userId } },
      // required: true,
    });
  }
  if (req.query.gener) {
    const id = await getGenerId(req.query.gener);
    include.push({
      model: models.Gener,
      as: "geners",
      through: { where: { generId: id } },
      required: true,
    });
  }
  if (req.query.authors) {
    include.push({
      model: models.Author,
      as: "writer",
      where: { name: req.query.authors },
    });
  }
  if (req.query.price) {
    const [start, end] = req.query.price.split(",");
    where.price = { [Op.between]: [+start, +end] };
  }
  if (req.query.rating) {
    const rating = +req.query.rating;
    where.rating = { [Op.gte]: rating };
  }
  try {
    books = await models.Book.findAndCountAll({
      distinct: 'Book.id', // without this field count more than existing
      order: [[sortTarget, direction]],
      where,
      include,
      offset: limit * (page - 1),
      limit,
    })
    
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = getAllBooks;
