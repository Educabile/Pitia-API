// gps-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const gps = new Schema(
    {
      epv: { type: Number, required: true },
      ept: { type: Number, required: true },
      lon: { type: Number, required: true },
      class: { type: String, required: true },
      track: { type: Number, required: true },
      device: { type: String, required: true },
      mode: { type: Number, required: true },
      time: { type: Date, required: true },
      lat: { type: Number, required: true },
      climb: { type: Number, required: true },
      speed: { type: Number, required: true },
      alt: { type: Number, required: true }
    },
    {}
  );

  return mongooseClient.model('gps', gps);
};
