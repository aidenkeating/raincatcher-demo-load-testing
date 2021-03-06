'use strict';
var app = {
  demand: true,
  type: 'string',
  alias: 'a',
  describe: 'Cloud app base URL to target'
};

var username = {
  demand: true,
  type: 'string',
  alias: 'u',
  describe: 'Username to use to login to the app'
};

var password = {
  demand: true,
  type: 'string',
  alias: 'p',
  describe: 'Password to use to login to the app'
};

var configuredYargs = require('yargs')
    .reset()
    .option('app', app)
    .option('username', username)
    .option('password', password);

module.exports = configuredYargs;
module.exports.app = app;
module.exports.username = username;
module.exports.password = password;
