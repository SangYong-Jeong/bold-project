import { CallToActionSharp } from '@mui/icons-material';
import { createAction, handleActions } from 'redux-actions';
import * as api from '../lib/api';
import { startLoading, finishLoading } from './loading';

const REGISTER = 'main/REGISTER';
const LIST = 'main/LIST';
const VIEW = 'main/VIEW';

export const mainRegister = createAction(REGISTER, (data) => data);

export const mainList = createAction(LIST);

export const mainView = createAction(VIEW);

const initialState = {
  lists: [],
};

const main = handleActions({
  [REGISTER]: (state, action) => ({
    ...state,
    lists: action.payload,
  }),
  [LIST]: (state, action) => ({
    ...state,
    lists: action.payload,
  }),
  [VIEW]: (state, action) => ({
    ...state,
    lists: action.payload,
  }),
});

export default main;
