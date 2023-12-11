const mongoose = require("mongoose");

const metrics_schema = new mongoose.Schema({
  created_at: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  mesured_at: {
    type: Date,
    immutable: true,
    required: true,
  },

  content: {
    type: [String],
  },
  values: {
    sensor_1: [Number],
    sensor_2: [Number],
    sensor_3: [Number],
    sensor_4: [Number],
    sensor_5: [Number],
  },
});

module.exports =
  mongoose.models.Metrics || mongoose.model("Metrics", metrics_schema);
