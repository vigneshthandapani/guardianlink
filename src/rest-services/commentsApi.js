import { fetchApi } from './coreApi';
import { commentListData, commentListFetching } from "../redux/actionCreators";

export const fetchComments = async (
    dispatch,
) => {
    dispatch(commentListFetching(true));
    const onSuccess = (response) => {
        dispatch(commentListData(response));
        dispatch(commentListFetching(false));
    };
    const onFailure = (error) => {
        dispatch(commentListFetching(false));
    };
    const url = `https://gorest.co.in/public/v1/comments`;
    await fetchApi(
        url,
        onSuccess,
        onFailure,
    );
};
