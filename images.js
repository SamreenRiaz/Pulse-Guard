const mongoose = require('mongoose');
const imageSchema = new mongoose.Schema({
    doctorId: String,
    imageUrl: String,
    label: String,
    description: String,
    dateUploaded: { type: Date, default: Date.now },
  });
  
  const Image = mongoose.model('medicalimages', imageSchema);
  module.exports = Image;