'use strict';
module.exports = (sequelize, DataTypes) => {
  const conversation_user = sequelize.define('conversation_user', {
    userId: DataTypes.INTEGER,
    conversationId: DataTypes.INTEGER
  }, {});
  conversation_user.associate = function (models) {
    conversation_user.belongsTo(models.user);
    conversation_user.belongsTo(models.conversation);
  };
  return conversation_user;
};