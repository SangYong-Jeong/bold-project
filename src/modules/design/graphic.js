import { CallToActionSharp } from '@mui/icons-material';
import { createAction, handleActions } from 'redux-actions';
import * as api from '../lib/api';
import { startLoading, finishLoading } from './loading';

const REGISTER = 'graphic/REGISTER';
const LIST = 'graphic/LIST';
const VIEW = 'graphic/VIEW';

export const graphicRegister = createAction(REGISTER, (data) => data);

export const graphicList = createAction(LIST);

export const graphicView = createAction(VIEW);

const initialState = {
  lists: [],
};

const graphic = handleActions({
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

export default graphic;
