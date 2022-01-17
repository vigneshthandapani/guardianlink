import * as actionTypeVars from './actionTypeVars';

export const todoListFetching = (
  payload,
) => ({
  type: actionTypeVars.TODO_IS_FETCHING,
  payload,
});

export const todoListData = (
  payload,
) => ({
  type: actionTypeVars.TODO_LIST,
  payload,
});
