const config = require('../config');
const creds = {
  development: {
    username: config.DB_USERNAME,
    password: config.DB_PASSWORD,
    database: "postgres",
    host: config.DB_HOSTNAME,
    dialect: config.DB_DIALECT
  },
  test: {
    username: config.DB_USERNAME,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
    host: config.DB_HOSTNAME,
    dialect: 'postgresql'
  },
  production: {
    username: config.DB_USERNAME,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
    host: config.DB_HOSTNAME,
    dialect: 'postgresql'
  }
};

module.exports = creds;
