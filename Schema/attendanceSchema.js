const mongoose = require("mongoose");

const attendance = new mongoose.Schema({
  rollNo: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  classField: {
    type: String,
    required: true,
  },
  sectionField: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  dateOnly: {
    type: String,
    required: true,
  },
  punchIn: {
    type: String,
    required: true,
  },
  punchOut: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});
module.exorts = mongoose.model("attendance", attendance);
