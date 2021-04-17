import ghApi from '../../services/ghApi';
import { generalSlice } from '../general/generalSlice';
import { reposSlice } from './reposSlice';

export const getRepos = (query) => async (dispatch) => {
  dispatch(generalSlice.actions.setLoading(true));
  try {
    const { data } = await ghApi.getResource('repositories', query);
    dispatch(reposSlice.actions.setRepos(data));
    dispatch(generalSlice.actions.clearError());
  } catch (error) {
    console.log('Error in getRepos :>> ', error);
    dispatch(generalSlice.actions.setError(error.message));
  } finally {
    dispatch(generalSlice.actions.setLoading(false));
  }
};
