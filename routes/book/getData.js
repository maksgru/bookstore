const models = require('../../database/models');
const getData = async (req, res) => {
  try {
    const geners = await models.Gener.findAll();
    const authors = await models.Author.findAll();
    const authorNames = authors.map(author => author.name)
    const generNames = geners.map(gener => gener.name);
    res.json({authorNames, generNames});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};
module.exports = getData;