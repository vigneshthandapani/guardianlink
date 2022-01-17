import { postListInitialState } from './initialState';
import * as actionTypeVars from './actionTypeVars';

export const postReducer = (
  state = postListInitialState,
  action,
) => {
  switch (action.type) {
    case actionTypeVars.POST_LIST: {
      const newState = {
        ...state,
        data: action.payload,
      };
      return newState;
    }
    case actionTypeVars.POST_IS_FETCHING: {
      const newState = {
        ...state,
        isFetching: action.payload,
      };
      return newState;
    }
    default:
      const newState = {
        ...state
      };
      return newState;
  }
};
