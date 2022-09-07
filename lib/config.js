module.exports = {
  db: {
    connectionString: process.env.DB_CONNECTION_STRING,
    idleTimeoutMillis: 60000,
    max: 20,
  },
};
