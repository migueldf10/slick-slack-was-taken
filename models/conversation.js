'use strict';
module.exports = (sequelize, DataTypes) => {
  const conversation = sequelize.define('conversation', {
    title: DataTypes.STRING
  }, {});
  conversation.associate = function (models) {
    conversation.hasMany(models.message);
    conversation.belongsToMany(models.user, {
      through: "conversation_user",
      foreignKey: "conversation_id",
    });

  };
  return conversation;
};