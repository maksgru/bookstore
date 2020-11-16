const models = require('../../database/models');
const getGeners = async (req, res) => {
  try {
    const geners = await models.Gener.findAll();
    const data = geners.map(item => item.name);
    res.json(data);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};
module.exports = getGeners;