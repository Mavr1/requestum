import axios from 'axios';

axios.defaults.baseURL = 'https://api.github.com';

const getResource = (resource, query, page = 1, count = 10) =>
  axios
    .get(`/search/${resource}?q=${query}&page=${page}&per_page=${count}`)
    .then((d) => d);

export default { getResource };
