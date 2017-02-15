'use strict';

var file = [{
  name: "Memanah",
  createdAt: new Date(),
  updatedAt : new Date()
},{
  name: "Berkuda",
  createdAt: new Date(),
  updatedAt : new Date()
},{
  name: "Berlari",
  createdAt: new Date(),
  updatedAt : new Date()
}]

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Skills', file );

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Skills', null, {});
  }
};
