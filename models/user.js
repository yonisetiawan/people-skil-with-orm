'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // User.hasMany(models.Users_skill)
        User.belongsToMany(models.Skill, {through: 'Users_skill'})
      }
    }
  });
  return User;
};
