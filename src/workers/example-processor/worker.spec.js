const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const ExampleProcessor = require('./worker');

before(() => {
  chai.use(chaiAsPromised);
  chai.should();
});

describe('ExampleProcessor', () => {
  describe('#run()', () => {
    it('example', () => {
      ExampleProcessor.run();
      // TODO
    });
  });
});
