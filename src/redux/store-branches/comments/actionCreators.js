import * as actionTypeVars from './actionTypeVars';

export const commentListFetching = (
  payload,
) => ({
  type: actionTypeVars.COMMENT_IS_FETCHING,
  payload,
});

export const commentListData = (
  payload,
) => ({
  type: actionTypeVars.COMMENT_LIST,
  payload,
});
