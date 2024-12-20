const mongoose = require("mongoose");

const parent = new mongoose.Schema({
  parentsID: {
    type: String,
    required: true,
  },
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
  phone: {
    type: Number,
    required: true,
  },
  cnic: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  religion: {
    type: String,
    required: true,
  },

  HomeAddress: {
    type: String,
    required: true,
  },
  officeAddress: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  state: {
    type: Number,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
  childID: {
    type: String,
    required: true,
  },
  childName: {
    type: String,
    required: true,
  },
  firstChild: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("parent", parent);
