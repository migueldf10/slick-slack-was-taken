'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      'conversations',
      [
        {
          title: 'general',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'miguel1 x miguel2',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );

  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("conversations", null, {});
  },
};
