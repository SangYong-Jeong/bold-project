import { CallToActionSharp } from '@mui/icons-material';
import { createAction, handleActions } from 'redux-actions';
import * as api from '../lib/api';
import { startLoading, finishLoading } from './loading';

const REGISTER = 'packages/REGISTER';
const LIST = 'packages/LIST';
const VIEW = 'packages/VIEW';

export const packagesRegister = createAction(REGISTER, (data) => data);

export const packagesList = createAction(LIST);

export const packagesView = createAction(VIEW);

const initialState = {
  lists: [],
};

const packages = handleActions({
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

export default packages;
