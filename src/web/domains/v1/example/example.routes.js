const debug = require('../../../../config/debug')('web:v1:example:routes');
const Router = require('koa-router');

const router = new Router();

debug('configuring routes');

const ExampleController = require('./example.controller');

router.get('/', ExampleController.index);

module.exports = router;
