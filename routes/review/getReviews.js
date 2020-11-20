const models = require('../../database/models');

module.exports = async (req, res) => {

  const bookId = req.query.bookId;

  try {
    const reviews = await models.Review.findAll({
       where: { bookId },
       include: [{
         model: models.User,
         as: 'reviewer',
         attributes: ['name']
       }]
      });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};