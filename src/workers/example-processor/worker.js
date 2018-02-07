const debug = require('../../config/debug')('workers:example-processor');
const redis = require('../../config/redis');
const moment = require('moment');
const axios = require('axios');

/**
 * @module ExampleProcessor
 */
const ExampleProcessor = {
  /**
   * @return {string}
   */
  getKey: () => `example-${moment().format('MMMM Do YYYY, h:mm:ss a')}`,

  /**
   * @return {Promise<string>}
   */
  getValue: async () => {
    debug('querying whatdoestrumpthink api');

    try {
      const response = await axios.get('https://api.whatdoestrumpthink.com/api/v1/quotes/random');
      debug('succeeded querying whatdoestrumpthink');
      return JSON.stringify(response.data);
    } catch (err) {
      debug('failed querying whatdoestrumpthink');
      return JSON.stringify(err.response.data);
    }
  },

  /**
   * @param {String} key
   * @param {String} value
   * @return {Promise<any>}
   */
  populate: (key, value) => new Promise((resolve, reject) => {
    debug('saving key', key);

    redis.set(key, value, 'EX', (60 * 5), (err) => { // Lasts 5 minutes
      if (err) return reject(err);
      resolve();
    });
  }),

  /**
   * @return {Promise<void>}
   */
  run: async () => {
    const key = await ExampleProcessor.getKey();
    const value = await ExampleProcessor.getValue();

    await ExampleProcessor.populate(key, value);
  },
};

module.exports = ExampleProcessor;
