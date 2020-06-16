'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  user.associate = function (models) {
    user.hasMany(models.message);
    user.belongsToMany(models.conversation, {
      through: "conversation_user",
      foreignKey: "userId",
    });
  };
  return user;
}