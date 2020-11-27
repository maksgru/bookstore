const models = require("../../database/models");

module.exports = async (req, res) => {
  const { userId, bookId } = req.body;
  try {
    const review = await models.Review.findOne({ where: { userId, bookId } });
    await review.update({ ...req.body });

    const bookReviews = await models.Review.findAll({
      where: { bookId: req.body.bookId },
      order: [["updatedAt", "DESC"]],
      include: [
        {
          model: models.User,
          as: "reviewer",
          attributes: ["name", "id"],
        },
      ],
    });
    const reviewerId = req.body.userId;

    const sum = bookReviews.reduce((sum, review) => sum + review.grade, 0);
    const rating = Math.round(sum / bookReviews.length);
    await models.Book.update({ rating }, { where: { id: bookId } });

    res.json({ bookReviews, reviewerId });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
