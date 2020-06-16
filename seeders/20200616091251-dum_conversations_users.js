'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      'conversations_users',
      [
        {
          user_id: 1,
          conversation_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 1,
          conversation_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 2,
          conversation_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 2,
          conversation_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 3,
          conversation_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 4,
          conversation_id: 2,
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
