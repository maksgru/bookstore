const models = require('../../database/models');

module.exports = async (req, res) => {

  const bookId = req.query.bookId;
  let reviewer;
  let reviewerId=0;
  try {
    if (req.userId) {
      const userId = req.userId;
      reviewer = await models.Review.findAll({ where: { bookId, userId } });
      if (reviewer.length) reviewerId = userId;
    }
    const bookReviews = await models.Review.findAll({
       where: { bookId },
       include: [{
         model: models.User,
         as: 'reviewer',
         attributes: ['name', 'id']
       }]
      });
    res.json({bookReviews, reviewerId});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};