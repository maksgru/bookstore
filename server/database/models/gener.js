'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gener extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Gener.belongsToMany(models.Book, {
        through: models.BookGeners,
        as: 'books',
        foreignKey: 'generId'
      });
      // define association here
    }
  };
  Gener.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Gener',
  });
  return Gener;
};