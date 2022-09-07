module.exports = {
  db: {
    connectionString: process.env.DATABASE_URL,
    idleTimeoutMillis: 60000,
    max: 20,
  },
};
