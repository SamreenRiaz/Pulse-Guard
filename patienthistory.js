const mongoose = require('mongoose');

// Define your patient history schema
const patienthistorySchema = new mongoose.Schema({
  patientId: { type: String, required: true },
  doctorId: { type: String, required: true },
  visitDate: { type: Date, required: true },
  symptoms: { type: String, required: true },
  treatment: { type: String, required: true },
  notes: { type: String, required: false },
});

// Explicitly connect this schema to the 'patients' collection in your database
const PatientHistory = mongoose.model('PatientHistory', patienthistorySchema, 'patients');

module.exports = PatientHistory;
