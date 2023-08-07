'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('podcast_categories', [
      { podcast_category_name: 'Conteúdos de Química' },
      { podcast_category_name: 'Temáticos' },
      { podcast_category_name: 'De prof para prof' },
      { podcast_category_name: 'Entrevistas' },
      { podcast_category_name: 'Motivacionais' },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('podcast_categories', null, {});
  }
};
