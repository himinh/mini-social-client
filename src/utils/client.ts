import axios from 'axios';

const client = axios;

client.defaults.baseURL = 'https://awesome-minisocialnetwork.herokuapp.com';

client.interceptors.response.use((res) => {
  return res.data;
});

export { client };
