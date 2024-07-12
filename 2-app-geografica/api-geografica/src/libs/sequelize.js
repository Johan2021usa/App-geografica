const {Sequelize} = require('sequelize');
const {config} = require('../config/config');
const setupModels = require('./../db/models');

const sequelize = new Sequelize(
    config.dbName,
    config.dbUser,
    config.dbPassword,
    {
        host: config.dbHost,
        dialect: 'postgres',
        logging: console.log,
        /*pool: {
            max: 5,
            min:0,
            acquire:30000,
            idle:10000,
        }*/
    }
);

//sequelize.sync();
setupModels(sequelize);

module.exports = sequelize;