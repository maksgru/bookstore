'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookGeners extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  BookGeners.init({
    bookId: DataTypes.NUMBER,
    generId: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'BookGeners',
  });
  return BookGeners;
};