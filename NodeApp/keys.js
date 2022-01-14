module.exports = {
  redisHost: process.env.REDIS_HOST,
  redisPort: process.env.REDIS_PORT,
  pgUser: process.env.PGUSER,
  pgHost: process.env.PGHOST,
  pgDatabase: process.env.PGDATABASE,
  pgPassword: process.env.PGPASSWORD,
  port: process.env.PORT,
  dbUrl: process.env.ME_CONFIG_MONGODB_SERVER, //"127.0.0.1:8080",
  username: process.env.ME_CONFIG_MONGODB_ADMINUSERNAME, //"dXNlcm5hbWU=", //process.env.ME_CONFIG_MONGODB_ADMINUSERNAME,
  password: process.env.ME_CONFIG_MONGODB_ADMINPASSWORD, //"cGFzc3dvcmQ=",
};
