"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Books",
      [
        {
          name: "Clean Code",
          author: "Robert Martin",
          description: "A Handbook of Agile Software Craftsmanship.",
          rating: 5,
          price: 9520,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Books", null, {});
  },
};
