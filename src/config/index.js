const pkg = require('../../package.json');

global.APP_NAME = pkg.name;

const debugModule = require('./debug');

const debug = debugModule('config:index');

debug('initializing app configuration');

module.exports = {
  Env: require('./env'),
  debug: debugModule,
  logger: require('./logger'),
  promise: require('./promise'),
  redis: require('./redis'),
  views: require('./views'),
  workers: require('./workers'),
};
