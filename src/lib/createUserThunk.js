import { startLoading, finishLoading } from '../modules/loading';

export default function createUserThunk(type, request) {
  return (userid, password) => async (dispatch) => {
    dispatch(startLoading(type));
    try {
      const response =
        type !== 'user/LOGOUT'
          ? await request()
          : await request(userid, password);
      dispatch({
        type,
      });
    } catch (e) {}
  };
}
