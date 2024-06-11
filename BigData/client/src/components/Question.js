import React, { useState } from 'react';

const Question = ({ questionNumber, question }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
    setShowExplanation(true);
  };

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '10px', textAlign: 'left' }}>
      <h3>Question {questionNumber}: {question.question}</h3>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(index)}
            style={{
              marginBottom: '10px',
              width: '300px', // Adjust the width as needed
              fontSize: '16px', // Adjust the font size as needed
              backgroundColor: selectedOption === index ? 'blue' : 'white',
              color: selectedOption === index ? 'white' : 'black',
              border: '1px solid #ccc',
              borderRadius: '5px',
              padding: '10px',
              cursor: 'pointer',
              textAlign: 'left',
            }}
          >
            {option}
          </button>
        ))}
      </div>
      {showExplanation && (
        <p style={{ marginTop: '10px' }}>
          {selectedOption === question.correctAnswer ? 'Correct!' : 'Wrong!'} Explanation: {question.explanation}
        </p>
      )}
    </div>
  );
};

export default Question;
