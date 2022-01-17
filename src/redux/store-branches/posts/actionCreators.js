import * as actionTypeVars from './actionTypeVars';

export const postListFetching = (
  payload,
) => ({
  type: actionTypeVars.POST_IS_FETCHING,
  payload,
});

export const postListData = (
  payload,
) => ({
  type: actionTypeVars.POST_LIST,
  payload,
});
