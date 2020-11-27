const models = require('../../database/models');

module.exports = async (req, res) => {
  try {
    await models.Review.create({ ...req.body });
    
    const bookReviews = await models.Review.findAll({
       where: { bookId: req.body.bookId },
       order: [['updatedAt', 'DESC']],
       include: [{
         model: models.User,
         as: 'reviewer',
         attributes: ['name', 'id']
       }]
      });
      const reviewerId = req.body.userId;

      const sum = bookReviews.reduce((sum, review) => sum + review.grade, 0);
      const rating = Math.round(sum / bookReviews.length);
      await models.Book.update({ rating }, { where: { id: req.body.bookId } });

    res.json({bookReviews, reviewerId});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};