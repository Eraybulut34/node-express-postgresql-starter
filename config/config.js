const creds = {
  development: {
    username: "postgres",
    password: "e1r2y3a4",
    database: "postgres",
    host: "localhost:5432",
    dialect: 'postgresql'
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'postgresql'
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'postgresql'
  }
};

module.exports = creds;
