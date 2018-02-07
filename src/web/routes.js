const debug = require('../config/debug')('web:routes');
const Router = require('koa-router');

const router = new Router();

debug('configuring routes');

const application = require('./domains/application');
const v1 = require('./domains/v1');

router.use('/', application.routes(), v1.allowedMethods());
router.use('/v1', v1.routes(), v1.allowedMethods());

module.exports = router;
