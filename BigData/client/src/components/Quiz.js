import React, { useState, useEffect, useCallback } from 'react';
import { getQuestions } from '../services/api';
import Question from './Question';
import './Quiz.css';

const Quiz = () => {
  const [language, setLanguage] = useState('');
  const [questions, setQuestions] = useState([]);
  const [languageSelected, setLanguageSelected] = useState(false);

  const handleLanguageSelect = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setLanguageSelected(true);
  };

  const fetchQuestions = useCallback(async () => {
    try {
      const response = await getQuestions(language);
      setQuestions(response.data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  }, [language]);

  useEffect(() => {
    if (languageSelected) {
      fetchQuestions();
    }
  }, [languageSelected, fetchQuestions]);

  const languageOptions = ['java', 'c', 'c++', 'python'];

  return (
    <div className="quiz-container">
      {!languageSelected && (
        <div className="select-language">
          <h2>Please select a programming language:</h2>
          <div className="language-buttons">
            {languageOptions.map((lang, index) => (
              <button key={index} onClick={() => handleLanguageSelect(lang)}>
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
      {languageSelected && (
        <div className="questions-container">
          {questions.map((question, index) => (
            <Question key={index} question={question} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Quiz;
