'use strict';

const file = [{
    "name": "Rollins",
    "email": "blandit@quam.com",
    "createdAt": "2017-01-01",
    "updatedAt": "2017-01-01"
}, {
    "name": "Burris",
    "email": "mauris.Morbi.non@nequeNullam.com",
    "createdAt": "2017-01-01",
    "updatedAt": "2017-01-01"
}, {
    "name": "Morgan",
    "email": "dui@magnis.cam",
    "createdAt": "2017-01-01",
    "updatedAt": "2017-01-01"
}, {
    "name": "Hardin",
    "email": "pharetra.felis.eget@mattisInteger.com",
    "createdAt": "2017-01-01",
    "updatedAt": "2017-01-01"
}, {
    "name": "Coleman",
    "email": "leo.Cras.vehicula@musProinvel.edu",
    "createdAt": "2017-01-01",
    "updatedAt": "2017-01-01"
}, {
    "name": "Griffith",
    "email": "egestas.Aliquam@Proinvelnisl.edu",
    "createdAt": "2017-01-01",
    "updatedAt": "2017-01-01"
}, {
    "name": "Deleon",
    "email": "Donec.tincidunt.Donec@dolor.org",
    "createdAt": "2017-01-01",
    "updatedAt": "2017-01-01"
}];

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

    return queryInterface.bulkInsert('Users', file);
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
      return queryInterface.bulkDelete('Users', null, {});
  }
};
