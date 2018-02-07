const debug = require('./debug')('config:workers');
const Env = require('./env');

debug('configuring workers');

if (Env.EXAMPLE_PROCESSOR) {
  debug('enabling example worker');
  exports.example = require('../workers/example-processor');
}
