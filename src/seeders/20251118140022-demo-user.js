"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     await queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    await queryInterface.bulkInsert(
      "User",
      [
        {
          email: "dduccraft@gmail.com",
          password: "123",
          username: "Dao Anh Duc",
        },
        {
          email: "dduccraft1@gmail.com",
          password: "123",
          username: "Dao Anh Duc 1",
        },
        {
          email: "dduccraft2@gmail.com",
          password: "123",
          username: "Dao Anh Duc 2",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("User", null, {});
  },
};
