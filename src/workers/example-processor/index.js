const ExampleProcessor = require('./worker');

setInterval(ExampleProcessor.run, (20 * 1000)); // Runs every 20 seconds

module.exports = ExampleProcessor;
