const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'manav@2606', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
