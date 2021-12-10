import { createAction, handleActions } from 'redux-actions';

const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';
const REGISTER = 'user/REGISTER';

export const login = createAction(LOGIN);
export const logout = createAction(LOGOUT);
export const register = createAction(REGISTER);

const initialState = {
  userid: '',
  isLogIn: false,
};

const user = handleActions(
  {
    [LOGIN]: (state, action) => ({ isLogin: true, userid: action.payload }),
    [REGISTER]: (state, action) => ({ isLogin: true, userid: action.payload }),
    [LOGOUT]: (state, action) => ({ isLogin: false, userid: '' }),
  },
  initialState
);

export default user;
