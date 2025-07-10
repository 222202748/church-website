const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  eventType: String,
  registrationDate: Date,
  status: String,
  notes: String,
  attendeeCount: Number
});

module.exports = mongoose.model('Registration', registrationSchema);
