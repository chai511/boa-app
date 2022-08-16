import { FETCHED_GITHUB_DATA,FETCHING_GITHUB_DATA } from '../actions/types';

export default function githubReducer(state, action) {
  switch (action.type) {
      case FETCHING_GITHUB_DATA:
        state={...state,isLoading:true}
        setTimeout({},4000)
        return state;
      case FETCHED_GITHUB_DATA:
        state={...state,isLoading:false,data:action.payload}
      return state;
    default:
      return state;
  }
}