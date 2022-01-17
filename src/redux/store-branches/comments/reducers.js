import { commentListInitialState } from './initialState';
import * as actionTypeVars from './actionTypeVars';

export const commentReducer = (
  state = commentListInitialState,
  action,
) => {
  switch (action.type) {
    case actionTypeVars.COMMENT_LIST: {
      const newState = {
        ...state,
        data: action.payload,
      };
      return newState;
    }
    case actionTypeVars.COMMENT_IS_FETCHING: {
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
