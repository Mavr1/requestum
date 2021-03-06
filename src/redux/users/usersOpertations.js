import * as ghApi from '../../services/ghApi';
import { generalSlice } from '../general/generalSlice';
import { usersSlice } from './usersSlice';

export const getUsers = (query, page, count) => async (dispatch) => {
  dispatch(generalSlice.actions.setLoading(true));
  try {
    const { data } = await ghApi.getResource('users', query, page, count);
    dispatch(usersSlice.actions.setUsers(data));
    dispatch(generalSlice.actions.clearError());
  } catch (error) {
    console.log('Error in getUsers :>> ', error);
    dispatch(generalSlice.actions.setError(error.message));
  } finally {
    dispatch(generalSlice.actions.setLoading(false));
  }
};
