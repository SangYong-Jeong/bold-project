import axios from 'axios';

// user
export const userLogin = (userid, password) =>
  axios.post(
    'http://127.0.0.1:4000/api/user/login',
    {
      userid,
      password,
    },
    { withCredentials: true }
  );

export const userLogout = () =>
  axios.post(
    'http://127.0.0.1:4000/api/user/logout',
    {},
    {
      withCredentials: true,
    }
  );

export const userRegister = (userid, password) =>
  axios.post(
    'http://127.0.0.1:4000/api/user/register',
    { userid, password },
    { withCredentials: true }
  );

// post
// export cont
