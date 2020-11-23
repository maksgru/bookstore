const models = require('../../database/models');
const getData = async (req, res) => {
  try {
    const geners = await models.Gener.findAll({attributes: ['name']});
    const authors = await models.Author.findAll({attributes: ['name']});
    const minPrice = await models.Book.min('price');
    const maxPrice = await models.Book.max('price');
    const authorNames = authors.map(author => author.name)
    const generNames = geners.map(gener => gener.name);
    res.json({authorNames, generNames, priceRange: [minPrice, maxPrice]});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};
module.exports = getData;