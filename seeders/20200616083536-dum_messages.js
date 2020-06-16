'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      'messages',
      [
        {
          userId: 1,
          conversationId: 1,
          body: 'Hey, this is a message',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          conversationId: 2,
          body: 'Hey, this is another 2  message',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          conversationId: 1,
          body: 'Hey, this is a third message',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          conversationId: 2,
          body: 'Hey, this is a fourth message',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );

  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("messages", null, {});
  },
};
