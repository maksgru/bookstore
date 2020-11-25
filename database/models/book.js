'use strict';
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
    // author: DataTypes.STRING,
    description: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    bookIcon: DataTypes.STRING,
    ratings: {
      type: DataTypes.VIRTUAL,
      get() {
        // console.log('this.reviews', this.reviews);
        return 4;
      }
    }
  }, {
    sequelize,
    modelName: 'Book',
    defaultScope: {
      include: [{
        model: Review(sequelize, DataTypes),
        as: 'reviews'
      }],
    },
    scopes: {
      base: {
        include: []
      }
    }
  });
  return Book;
};