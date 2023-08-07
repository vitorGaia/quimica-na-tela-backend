'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('podcast_categories', {
      podcastCategoryId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'podcast_category_id',
      },
      podcastCategoryName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'podcast_category_name',
      },
    })
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('podcast_categories');
  }
};
