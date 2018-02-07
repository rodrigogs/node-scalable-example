const debug = require('../../../config/debug')('web:v1:routes');
const Router = require('koa-router');

const router = new Router();

debug('configuring routes');

const example = require('./example/index');

router.use('/example', example.routes(), example.allowedMethods());

module.exports = router;
