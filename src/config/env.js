/**
 * @see https://github.com/motdotla/dotenv#usage
 */
if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

/**
 * @class Env
 */
class Env {
  /**
   * Application context.
   *
   * @default 'development'
   * @return {String}
   */
  static get NODE_ENV() {
    return process.env.NODE_ENV || 'development';
  }

  /**
   * Application port.
   *
   * @default 3000
   * @return {Number}
   */
  static get PORT() {
    return process.env.PORT ? Number(process.env.PORT) : 3000;
  }

  /**
   * HTTP log config.
   *
   * @see https://github.com/expressjs/morgan#predefined-formats
   * @default 'dev'
   * @return {String}
   */
  static get HTTP_LOG_CONFIG() {
    return process.env.HTTP_LOG_CONFIG || 'dev';
  }

  /**
   * Graylogs host.
   *
   * @default 'localhost'
   * @return {String}
   */
  static get GRAYLOGS_HOST() {
    return process.env.GRAYLOGS_HOST || 'localhost';
  }

  /**
   * Redis url.
   *
   * @default 'redis://localhost:6379'
   * @return {String}
   */
  static get REDIS_URL() {
    return process.env.REDIS_URL || 'redis://localhost:6379';
  }

  /**
   * Enable or disable Example Processor.
   *
   * @default false
   * @return {Boolean}
   */
  static get EXAMPLE_PROCESSOR() {
    return (process.env.EXAMPLE_PROCESSOR === 'true');
  }
}

module.exports = Env;
