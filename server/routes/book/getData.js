const models = require('../../database/models');
const sequelize = require('sequelize');
const getData = async (req, res) => {
  try {
    const geners = await models.Gener.findAll();
    const authors = await models.Author.findAll();
    const minPrice = await models.Book.min('price');
    const maxPrice = await models.Book.max('price');
    res.json({authors, geners, priceRange: [minPrice, maxPrice]});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};
module.exports = getData;