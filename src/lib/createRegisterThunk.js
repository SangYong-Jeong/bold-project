import { startLoading, finishLoading } from '../modules/loading';

export default function createRegisterThunk(type = '', request) {
  return (formData, config) => async (dispatch) => {
    dispatch(startLoading(type));
    try {
      await request(type, formData, config);
    } catch (e) {
      throw e;
    }
    dispatch(finishLoading(type));
  };
}
