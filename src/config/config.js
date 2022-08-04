let config = {};

/* mongodb connection configuration */
let noSqlDbConfig = {
  url: process.env.DB_URL || 'mongodb://localhost:27017/',
  name: process.env.DB_NAME || 'logDb',
};

config.db = { noSqlDbConfig };

/* JWT Authentication Credentials  */
config.jwt = {
  secret: process.env.JWT_SECRET  || 'dc09677035cdf44a398e3e3c5e21ee1fb2d9abc095549ae25298fb56495331ba09b4949a92876cf92b725274c82e9a16f8aad92898ed858da0c6286e0ae8a29e',
  expireIn: process.env.JWT_EXPIRE_IN || '1d',
  algorithm: process.env.JWT_ALGORITHM || 'HS256',
};

config.client = process.env.CLIENT_URL || '*';

module.exports = config;
