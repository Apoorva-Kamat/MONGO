const Question = require('../models/Question');

exports.getQuestionsByLanguage = async (req, res) => {
  try {
    const questions = await Question.find({ language: req.params.language });
    res.json(questions);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
