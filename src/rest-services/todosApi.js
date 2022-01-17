import { fetchApi } from './coreApi';
import { todoListData, todoListFetching } from "../redux/actionCreators";
export const fetchTodos = async (
  dispatch,
) => {
  dispatch(todoListFetching(false));

  const onSuccess = (response) => {
    dispatch(todoListData(response));
    dispatch(todoListFetching(false));
  };
  const onFailure = (error) => {
    dispatch(todoListFetching(false));
  };
  const url = `https://gorest.co.in/public/v1/todos`;
  await fetchApi(
    url,
    onSuccess,
    onFailure,
  );
};