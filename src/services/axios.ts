import axios from 'axios';

export default axios.create({
  baseURL: 'https://schoolapi.alexblattner.com/',
  // baseURL: 'http://localhost:3002/',
});
