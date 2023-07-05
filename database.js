const dotenv = require("dotenv");
dotenv.config();
const Sequelize = require('sequelize')
const db = new Sequelize(process.env.DB_LINK, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: 'true',
            rejectUnauthorized: false
          }
    }
  });
module.exports = db;
