const debug = require('./debug')('config:views');
const path = require('path');
const Pug = require('koa-pug');
const pkg = require('../../package.json');

debug('configuring template engine');

module.exports = app => new Pug({
  viewPath: path.resolve(__dirname, '../web'),
  basedir: undefined,
  debug: false,
  pretty: false,
  compileDebug: false,
  locals: {
    APP_NAME: pkg.name,
  },
  helperPath: [],
  app,
});
