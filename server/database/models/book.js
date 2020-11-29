'use strict';
require("dotenv").config();

const baseUrl = process.env.BASE_URL;

const {
  Model
} = require('sequelize');
const Review = require('./review');


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
      Book.belongsTo(models.Author, {
        foreignKey: 'authorId',
        as: 'writer'
      });
      Book.hasMany(models.Image, {
        foreignKey: 'bookId',
        as: 'images',
        onDelete: 'CASCADE'
      });
      Book.hasMany(models.Review, {
        foreignKey: 'bookId',
        as: 'reviews',
        onDelete: 'CASCADE'
      });
      Book.belongsToMany(models.Gener, {
        through: models.BookGeners,
        as: 'geners',
        foreignKey: 'bookId'
      });
      Book.belongsToMany(models.User, {
        through: models.UserFavorites,
        as: 'user',
        foreignKey: 'bookId'
      });
    }
  };
  Book.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    bookIcon: {
      type: DataTypes.STRING,
      get() {
        const bookPath = this.getDataValue('bookIcon');
        return baseUrl + bookPath;
      }
    },
    // rating: {
    //   type: DataTypes.VIRTUAL,
    //   get() {
    //     const sum = this.reviews.reduce((sum, review) => sum + review.grade, 0);
    //     const count = this.reviews.length;
    //     return Math.round(sum/count);
    //   }
    // }
  }, {
    sequelize,
    modelName: 'Book',
    // defaultScope: {
    //   include: [{
    //     model: Review(sequelize, DataTypes),
    //     as: 'reviews',
    //   }],
    // },
    // scopes: {
    //   base: {
    //     include: []
    //   }
    // }
  });
  return Book;
};