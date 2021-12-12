import { CallToActionSharp } from '@mui/icons-material';
import { createAction, handleActions } from 'redux-actions';
import * as api from '../lib/api';
import { startLoading, finishLoading } from './loading';

const REGISTER = 'illustration/REGISTER';
const LIST = 'illustration/LIST';
const VIEW = 'illustration/VIEW';

export const illustrationRegister = createAction(REGISTER, (data) => data);

export const illustrationList = createAction(LIST);

export const illustrationView = createAction(VIEW);

const initialState = {
  lists: [],
};

const illustration = handleActions({
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

export default illustration;
