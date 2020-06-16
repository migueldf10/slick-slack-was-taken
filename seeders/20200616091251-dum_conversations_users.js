'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      'conversations_users',
      [
        {
          userId: 1,
          conversationId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          conversationId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          conversationId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          conversationId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          conversationId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 4,
          conversationId: 2,
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
