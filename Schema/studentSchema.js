const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  rollNo: {
    type: Number,
    required: true,
  },
  bloodGroup: {
    type: String,
    required: true,
  },
  religion: {
    type: String,
    required: true,
  },
  email: {
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
  admissionID: {
    type: Number,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("student", studentSchema);
