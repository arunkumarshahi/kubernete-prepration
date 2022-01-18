module.exports = {
  port: process.env.port,
  dbUrl: process.env.db_url, //"127.0.0.1:8080",
  username: process.env["mongo-root-username"], //"dXNlcm5hbWU=", //process.env.ME_CONFIG_MONGODB_ADMINUSERNAME,
  password: process.env["mongo-root-password"], //"cGFzc3dvcmQ=",
};
