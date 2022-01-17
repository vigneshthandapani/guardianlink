import { todoListInitialState } from './initialState';
import * as actionTypeVars from './actionTypeVars';

export const todoReducer = (
  state = todoListInitialState,
  action,
) => {
  switch (action.type) {
    case actionTypeVars.TODO_LIST: {
      const newState = {
        ...state,
        data: action.payload,
      };
      return newState;
    }
    case actionTypeVars.TODO_IS_FETCHING: {
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
