// Initializes the `gps` service on path `/gps`
const createService = require('feathers-mongoose');
const createModel = require('../../models/gps.model');
const hooks = require('./gps.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/gps', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('gps');

  service.hooks(hooks);
};
