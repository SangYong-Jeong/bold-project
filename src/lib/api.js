import axios from 'axios';

export const postLogin = async (userid, password) =>
  await axios.post('http://127.0.0.1:4000', { userid, password });
