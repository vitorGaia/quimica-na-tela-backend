'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        display_name: 'User 1',
        email: 'user1@example.com',
        password: 'password123',
        image: 'user1.jpg',
      },
      {
        display_name: 'User 2',
        email: 'user2@example.com',
        password: 'password456',
        image: 'user2.jpg',
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
