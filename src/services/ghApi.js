import axios from 'axios';

axios.defaults.baseURL = 'https://api.github.com';
axios.defaults.headers.common['Authorization'] =
  'token' + process.env.REACT_API_KEY;

const getRepos = () => axios.get('/search/repositories').then((d) => d);

export default { getRepos };
