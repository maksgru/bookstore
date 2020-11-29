const models = require("../database/models");

module.exports = async (req, res, next) => {
  const bookId = req.method === "DELETE" ? req.query.bookId : req.body.bookId;
  try {
    const reviews = await models.Review.findAll({ where: { bookId } });
    const sum = reviews.reduce((sum, review) => sum + review.grade, 0);
    const grade = Math.round(reviews.length / sum);
    await models.Book.update({ grade }, { where: { id: bookId } });
  } catch (error) {
    console.log(error.message);
  }
};
