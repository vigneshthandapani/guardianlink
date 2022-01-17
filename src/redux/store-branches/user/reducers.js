import { userListInitialState } from './initialState';
import * as actionTypeVars from './actionTypeVars';

export const userReducer = (
  state = userListInitialState,
  action,
) => {
  switch (action.type) {
    case actionTypeVars.USER_LIST: {
      const newState = {
        ...state,
        data: action.payload,
      };
      return newState;
    }
    case actionTypeVars.USER_IS_FETCHING: {
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
