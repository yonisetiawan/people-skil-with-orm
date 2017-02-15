'use strict';
module.exports = function(sequelize, DataTypes) {
  var Users_skill = sequelize.define('Users_skill', {
    userID: DataTypes.INTEGER,
    skillID: DataTypes.INTEGER,
    nilai: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Users_skill;
};