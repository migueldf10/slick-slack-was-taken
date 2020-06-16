'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      'messages',
      [
        {
          sender_id: 1,
          conversation_id: 1,
          body: 'Hey, this is a message',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          sender_id: 1,
          conversation_id: 2,
          body: 'Hey, this is another 2  message',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          sender_id: 2,
          conversation_id: 1,
          body: 'Hey, this is a third message',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          sender_id: 2,
          conversation_id: 2,
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
