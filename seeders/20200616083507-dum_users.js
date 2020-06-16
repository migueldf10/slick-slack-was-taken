'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Miguel',
          email: 'oneemail@gmail.com',
          password: '1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'M2guel',
          email: 'twoemail@gmail.com',
          password: '1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'M3guel',
          email: 'threeemail@gmail.com',
          password: '1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'M4guel',
          email: 'fouremail@gmail.com',
          password: '1',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );

  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("users", null, {});
  },
};
