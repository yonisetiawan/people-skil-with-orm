'use strict';
module.exports = function(sequelize, DataTypes) {
  var Users_skill = sequelize.define('Users_skill', {
    UserId: DataTypes.INTEGER,
    SkillId: DataTypes.INTEGER,
    nilai: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Users_skill.belongsTo(models.User)
        Users_skill.belongsTo(models.Skill)
      }
    }
  });
  return Users_skill;
};
