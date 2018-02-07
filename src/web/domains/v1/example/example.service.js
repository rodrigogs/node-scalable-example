const debug = require('../../../../config/debug')('web:v1:example:service');
const redis = require('../../../../config/redis');

/**
 * @module ExampleService
 */
const ExampleService = {
  /**
   * Retrieves pre-cached Trump quotes.
   *
   * @return {Object}
   */
  consume: async () => {
    debug('retrieving Trump quotes');

    const keys = await redis.keysAsync('example-*');
    if (!keys.length) return [];

    const values = await redis.mgetAsync(keys);

    return values.map(JSON.parse);
  },
};

module.exports = ExampleService;
