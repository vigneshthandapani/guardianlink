import * as actionTypeVars from './actionTypeVars';

export const userIsFetching = (
  payload,
) => ({
  type: actionTypeVars.USER_IS_FETCHING,
  payload,
});

export const userListData = (
  payload,
) => ({
  type: actionTypeVars.USER_LIST,
  payload,
});
