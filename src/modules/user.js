import { createAction, handleActions } from 'redux-actions';
import * as api from '../lib/api';
import { startLoading, finishLoading } from './loading';

const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';
const REGISTER = 'user/REGISTER';

export const login = createAction(LOGIN);
export const logout = createAction(LOGOUT);
export const register = createAction(REGISTER);

export const loginAsync = (userid, password) => async (dispatch) => {
  dispatch(startLoading(LOGIN));
  try {
    const response = await api.postLogin(userid, password);
    dispatch({
      type: LOGIN,
      payload: response.data.userid,
    });
  } catch (e) {
    throw e;
  }
  dispatch(finishLoading(LOGIN));
};

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
    [REGISTER]: (state, action) => ({ isLogin: true, userid: action.payload }),
    [LOGOUT]: (state, action) => ({ isLogin: false, userid: '' }),
  },
  initialState
);

export default user;
