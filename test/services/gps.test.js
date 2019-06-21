const app = require('../../src/app');

describe('\'gps\' service', () => {
  it('registered the service', () => {
    const service = app.service('gps');
    expect(service).toBeTruthy();
  });
});
