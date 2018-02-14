const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const ExampleService = require('./example.service');

before(() => {
  chai.use(chaiAsPromised);
  chai.should();
});

describe('ExampleService', () => {
  describe('#consume()', () => {
    it('example', () => {
      ExampleService.consume();
      // TODO
    });
  });
});
