const models = require('../../database/models');

module.exports = async (req, res) => {
  await models.Review.create({ ...req.body });
  try {
    const reviews = await models.Review.findAll({
       where: { bookId: req.body.bookId },
       include: [{
         model: models.User,
         as: 'reviewer',
         attributes: ['name', 'id']
       }]
      });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};