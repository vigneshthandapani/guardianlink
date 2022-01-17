import { postListData, postListFetching } from '../redux/actionCreators';
import { fetchApi } from './coreApi';

export const fetchPosts = async (
    dispatch, pageNumber
) => {
    dispatch(postListFetching(true));
    const onSuccess = (response) => {
        // dispatch(postListData(response));
        dispatch({ type: 'POST_LIST', payload: response })
        dispatch(postListFetching(false));
    };
    const onFailure = () => {
        dispatch(postListFetching(false));
    };

    let url = '';
    if (pageNumber)
        url = `https://gorest.co.in/public/v1/posts?page=${pageNumber}`;
    else
        url = `https://gorest.co.in/public/v1/posts`;

    await fetchApi(
        url,
        onSuccess,
        onFailure,
    );
};