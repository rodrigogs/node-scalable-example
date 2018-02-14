const debug = require('../../../../../config/debug')('web:domains:api:v1:example:controller');
const ExampleService = require('./example.service');

/**
 * @module ExampleController
 */
const ExampleController = {
  /**
   * @api {get} /v1/example Retrieves what Trump says
   * @apiVersion 1.0.0
   * @apiName GetExample
   * @apiGroup Example
   *
   * @apiSuccess {Object[]} response List of Trump's quotes.
   * @apiSuccess {String} message Trump's quote.
   * @apiSuccess {Object} nlp_attributes Verbal structure.
   * @apiSuccess {Array[]} nlp_attributes.quote_structure Quote structure.
   */
  index: async (ctx) => {
    debug('status action');

    ctx.body = await ExampleService.consume();
  },
};

module.exports = ExampleController;
