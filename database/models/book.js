'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'owner'
      });
      Book.hasMany(models.Image, {
        foreignKey: 'bookId',
        as: 'images',
        onDelete: 'CASCADE'
      });
    }
  };
  Book.init({
    name: DataTypes.STRING,
    author: DataTypes.STRING,
    description: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    bookIcon: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};