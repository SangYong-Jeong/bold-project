import { createAction, handleActions } from 'redux-actions';

const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';
const REGISTER = 'user/REGISTER';

export const login = createAction(LOGIN);
export const logout = createAction(LOGOUT);
export const register = createAction(REGISTER);

const initialState = {
  id: '',
};

const user = handleActions(
  {
    [LOGIN]: (state, action) => ({ id: state.id }),
    [LOGOUT]: (state, action) => ({ id: state.id }),
  },
  initialState
);

export default user;
