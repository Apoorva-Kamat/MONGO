import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getQuestions = (language) => {
  return axios.get(`${API_URL}/questions/${language}`);
};
