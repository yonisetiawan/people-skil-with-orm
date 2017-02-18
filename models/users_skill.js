'use strict';
module.exports = function(sequelize, DataTypes) {
  var Users_skill = sequelize.define('Users_skill', {
    //id dibawah ini adalah tambahan jika saat menampilkan data Users_skill idnya tidak muncul
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
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
