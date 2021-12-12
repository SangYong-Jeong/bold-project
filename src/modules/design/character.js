import { CallToActionSharp } from '@mui/icons-material';
import { createAction, handleActions } from 'redux-actions';
import * as api from '../../lib/api';
const LIST = 'character/LIST';
const VIEW = 'character/VIEW';

export const characterList = createAction(LIST);

export const characterView = createAction(VIEW);

const initialState = {
  lists: [],
};

const character = handleActions({
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
