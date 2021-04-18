import axios from 'axios';

axios.defaults.baseURL = 'https://api.github.com';

const getResource = (resource, query, page = 1, count = 5) =>
  axios
    .get(`/search/${resource}?q=${query}&page=${page}&per_page=${count}`)
    .then((d) => d);

const getLanguage = (url) => axios.get(url).then((d) => d);

export { getLanguage, getResource };
