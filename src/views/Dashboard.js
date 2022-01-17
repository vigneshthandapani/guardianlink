import React, { useEffect } from 'react';
import { fetchUsers } from '../rest-services/userApi';
import { fetchPosts } from '../rest-services/postsApi';
import { fetchTodos } from '../rest-services/todosApi';
import { fetchComments } from '../rest-services/commentsApi';
import { Card } from "../components/card/Card";
import userIcon from "../assets/user.png"
import feedIcon from "../assets/feed.png"
import commentIcon from "../assets/comment.png"
import todoIcon from "../assets/todo.png"
import { useSelector, useDispatch } from 'react-redux';
import { Loader } from '../components/Loader/Loader';

export const Dashboard = () => {
    const dispatch = useDispatch();
    const storeState = useSelector(state => state);

    const userListData =  storeState && storeState.user && storeState.user.data;
    const isUserFetching = storeState && storeState.user && storeState.user.isFetching;
    const postListData =  storeState && storeState.post && storeState.post.data;
    const isPostFetching = storeState && storeState.post.isFetching;
    const commentListData = storeState && storeState.comment.data;
    const isCommentFetching = storeState && storeState.comment && storeState.comment.isFetching;
    const todoListData = storeState && storeState.todo.data;
    const isTodoFetching = storeState && storeState.todo && storeState.todo.isFetching;
    const isFetching = isUserFetching && isPostFetching && isCommentFetching && isTodoFetching;

    useEffect( async () => {
       await fetchUsers(dispatch);
       await fetchPosts(dispatch);
       await fetchComments(dispatch);
       await fetchTodos(dispatch);
    }, []);

    return (
        <>
            {isFetching ? <Loader /> :
                <div>
                    {userListData && userListData.meta && userListData.meta.pagination && <Card value={userListData.meta.pagination.total} title="Total Users" imgSrc={userIcon} />}
                    {postListData && postListData.meta && postListData.meta.pagination && <Card value={postListData.meta.pagination.total} title="Total Posts" imgSrc={feedIcon} />}
                    {commentListData && commentListData.meta && commentListData.meta.pagination && <Card value={commentListData.meta.pagination.total} title="Total Comments" imgSrc={commentIcon} />}
                    {todoListData && todoListData.meta && todoListData.meta.pagination && <Card value={todoListData.meta.pagination.total} title="Total Todos" imgSrc={todoIcon} />}
                </div >}
        </>

    )
};
