import axios from 'axios';

export const postLogin = (userid, password) =>
  axios.post('http://127.0.0.1:4000/api/user/login', {
    userid,
    password,
  });

export const postLogout = () =>
  axios.post('http://127.0.0.1:4000/api/user/logout');

export const postRegister = (userid, password) =>
  axios.post('http://127.0.0.1:4000/api/user/register', { userid, password });
