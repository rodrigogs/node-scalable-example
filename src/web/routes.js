const debug = require('../config/debug')('web:routes');
const Router = require('koa-router');

const router = new Router();

debug('configuring routes');

const application = require('./domains/application');
const api = require('./domains/api');

router.use('/', application.routes(), api.allowedMethods());
router.use('/api', api.routes(), api.allowedMethods());

module.exports = router;
