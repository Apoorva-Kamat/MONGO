const express = require('express');
const router = express.Router();
const questionController = require('./controllers/questionController');

router.get('/questions/:language', questionController.getQuestionsByLanguage);

module.exports = router;
