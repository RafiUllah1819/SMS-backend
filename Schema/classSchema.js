const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  classField: {
    type: String,
    required: true,
  },

  sectionField: {
    type: String,
  },
});

const classModel = mongoose.model("classData", classSchema);

module.exports = classModel;
