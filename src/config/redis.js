const debug = require('./debug')('config:redis');
const redis = require('redis');

const Env = require('../config/env');

Promise.promisifyAll(redis.RedisClient.prototype);
Promise.promisifyAll(redis.Multi.prototype);

/**
 * Resolves an empty promise when connection is not yet established.
 * It's usually inconvenient to get an error trying to get information from redis,
 * as it's mainly used as a cache.
 * If it's important to handle redis request errors, use getAsync function instead.
 *
 * @param args
 * @return {Promise.<*>}
 */
redis.RedisClient.prototype.safeGet = function safeGet(...args) {
  if (!this.connected) return Promise.resolve(undefined);
  return redis.RedisClient.prototype.getAsync.call(this, args);
};

const retryStrategy = (options) => {
  if (options.error && options.error.code === 'ECONNREFUSED') {
    debug('server refused connection');
  }
  return Math.min(options.attempt * 100, 20000); // Increases over time until 20000ms
};

debug('creating redis client');
const client = redis.createClient(Env.REDIS_URL, { retry_strategy: retryStrategy });

client.on('ready', () => debug('client is ready'));
client.on('connect', () => debug('client connected'));
client.on('reconnecting', () => debug('client reconnecting'));
client.on('error', err => debug('error', err));
client.on('end', () => debug('client connection closed'));
client.on('warning', warning => debug('warning', warning));

module.exports = client;
