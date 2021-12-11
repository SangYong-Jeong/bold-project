import { createAction, handleActions } from 'redux-actions';
import * as api from '../lib/api';
import { startLoading, finishLoading } from './loading';

const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';
const REGISTER = 'user/REGISTER';

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

export const logoutAsync = () => async (dispatch) => {
  dispatch(startLoading(LOGOUT));
  try {
    const response = await api.postLogout();
    if (response.status === 204) {
      dispatch({
        type: LOGOUT,
      });
    }
  } catch (e) {
    throw e;
  }
  dispatch(finishLoading(LOGOUT));
};

export const registerAsync = (userid, password) => async (dispatch) => {
  dispatch(startLoading(REGISTER));
  try {
    const response = await api.postRegister(userid, password);
    dispatch({
      type: REGISTER,
      payload: response.data.userid,
    });
  } catch (e) {
    throw e;
  }
  dispatch(finishLoading(REGISTER));
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
    [REGISTER]: (state, action) => ({
      ...state,
      userid: action.payload,
    }),
    [LOGOUT]: (state, action) => ({ isLogin: false, userid: '' }),
  },
  initialState
);

export default user;
