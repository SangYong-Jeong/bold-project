import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import { startLoading, finishLoading } from './loading';
import createUserThunk from '../lib/createUserThunk';

const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';
const REGISTER = 'user/REGISTER';

export const loginAsync = createUserThunk(LOGIN, api.userLogin);

export const logoutAsync = createUserThunk(LOGOUT, api.userLogout);

export const registerAsync = createUserThunk(REGISTER, api.userRegister);

const initialState = {
  userid: '',
  isLogin: false,
};

const user = handleActions(
  {
    [LOGIN]: (state, action) => ({
      ...state,
      isLogin: true,
      userid: action.payload,
    }),
    [REGISTER]: (state, action) => ({
      ...state,
      userid: action.payload,
    }),
    [LOGOUT]: (state, action) => ({ isLogin: false, userid: '' }),
  },
  initialState
);

export default user;
