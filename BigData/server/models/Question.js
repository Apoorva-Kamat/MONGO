const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  language: { type: String, required: true },
  question: { type: String, required: true },
  options: { type: [String], required: true },
  correctAnswer: { type: Number, required: true },
  explanation: { type: String, required: true }
});

module.exports = mongoose.model('Question', questionSchema);
