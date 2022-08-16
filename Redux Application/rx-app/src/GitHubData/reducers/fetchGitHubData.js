import axios from 'axios';
import { FETCHED_GITHUB_DATA } from '../actions/types';
const apiUrl = 'https://api.github.com/users/chai511';

export const fetchData = (data) => {
  return {
    type: FETCHED_GITHUB_DATA,
    payload:data
  }
};

export const fetchGithubData = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        dispatch(fetchData(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};