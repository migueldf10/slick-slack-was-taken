'use strict';
module.exports = (sequelize, DataTypes) => {
  const message = sequelize.define('message', {
    title: DataTypes.STRING
  }, {});
  message.associate = function (models) {
    message.belongsTo(models.user);
    message.belongsTo(models.conversation);
  };
  return message;
};