"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Images",
      [
        {
          url: "https://images-na.ssl-images-amazon.com/images/I/41JOmGowq-L._SX408_BO1,204,203,200_.jpg",
          bookId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://images-na.ssl-images-amazon.com/images/I/51cUVaBWZzL._SX380_BO1,204,203,200_.jpg",
          bookId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Image", null, {});
  },
};
