'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Book, {
        foreignKey: 'userId',
        as: 'books',
        onDelete: 'CASCADE'
      });
      User.hasMany(models.Review, {
        foreignKey: 'userId',
        as: 'reviews',
        onDelete: 'CASCADE'
      });
      User.belongsToMany(models.Book, {
        through: models.UserFavorites,
        as: 'favorites',
        foreignKey: 'userId'
      });
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    userImg: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User'
  });
  return User;
};