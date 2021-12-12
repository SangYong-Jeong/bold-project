import { CallToActionSharp } from '@mui/icons-material';
import { createAction, handleActions } from 'redux-actions';
import * as api from '../lib/api';
import { startLoading, finishLoading } from './loading';

const REGISTER = 'character/REGISTER';
const LIST = 'character/LIST';
const VIEW = 'character/VIEW';

export const characterRegister = createAction(REGISTER, (data) => data);

export const characterList = createAction(LIST);

export const characterView = createAction(VIEW);

const initialState = {
  lists: [],
};

const character = handleActions({
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

export default character;
