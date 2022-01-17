import { userListData, userIsFetching } from "../redux/actionCreators";
import { createApi, deleteApi, fetchApi, updateApi } from './coreApi';

export const fetchUsers = async (dispatch, pageNumber) => {
  dispatch(userIsFetching(true));
  const onSuccess = (response) => {
    dispatch(userListData(response));
    dispatch(userIsFetching(false));
  };
  const onFailure = () => {
    dispatch(userIsFetching(false));
  };
  let url = "";
  if (pageNumber) {
    url = `https://gorest.co.in/public/v1/users?page=${pageNumber}`;

  } else
    url = `https://gorest.co.in/public/v1/users`;

  await fetchApi(
    url,
    onSuccess,
    onFailure,
  );
};

export const createUser = async (
  dispatch,
  payload,
) => {
  dispatch(userIsFetching(true));
  const onSuccess = () => {
    dispatch(userIsFetching(false));
  };
  const onFailure = () => {
    dispatch(userIsFetching(false));
  };
  const url = `https://gorest.co.in/public/v1/users`;
  await createApi(
    url,
    payload,
    onSuccess,
    onFailure,
  );
};

export const deleteUser = async (
  dispatch,
  userId,
) => {
  dispatch(userIsFetching(true));
  const onSuccess = (response) => {
    dispatch(userListData(response));
    dispatch(userIsFetching(false));
  };
  const onFailure = () => {
    dispatch(userIsFetching(false));
  };
  const url = `https://gorest.co.in/public/v1/users/${userId}`;
  await deleteApi(url, onSuccess, onFailure);
};

export const updateUser = async (
  dispatch,
  userId,
  payload
) => {
  dispatch(userIsFetching(true));
  const onSuccess = (response) => {
    dispatch(userIsFetching(false));
  };
  const onFailure = () => {
    dispatch(userIsFetching(false));
  };
  const url = `https://gorest.co.in/public/v1/users/${userId}`;
  console.log(url)
  await updateApi(url, payload, onSuccess, onFailure);
};