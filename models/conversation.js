'use strict';
module.exports = (sequelize, DataTypes) => {
  const conversation = sequelize.define('conversation', {
    title: DataTypes.STRING
  }, {});
  conversation.associate = function (models) {
    conversation.hasMany(models.user);
  };
  return conversation;
};