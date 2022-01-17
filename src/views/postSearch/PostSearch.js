import React, { useEffect, useState } from 'react';
import './PostSearch.css';
import { Pagination } from 'antd';
import { fetchPosts } from "../../rest-services/postsApi";
import { useSelector, useDispatch } from "react-redux";
import { Loader } from '../../components/Loader/Loader';

export const PostSearch = () => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [filterdPosts, setFilteredPosts] = useState([]);
    
    const dispatch = useDispatch();
    const storeState = useSelector(state => state);
    const postData = storeState && storeState.post.data;
    const isPostFetching = storeState && storeState.post.isFetching;

    useEffect(() => {
        setSearchKeyword('');
        fetchPosts(dispatch);
    }, []);

    useEffect(() => {
        if (postData)
            setFilteredPosts(postData.data);
    }, [postData]);

    const handleChange = (e) => {
        const keyword = e.target.value;
        if (keyword !== '') {
            const filteredPosts = postData.data.filter((post) => {
                return post.title.toLowerCase().includes(keyword.toLowerCase());
            });
            setFilteredPosts(filteredPosts);
        } else {
            setFilteredPosts(postData.data);
        }
        setSearchKeyword(keyword);
    };

    const handleChangePagination = (pageNumber) => {
        fetchPosts(dispatch, pageNumber);
    }

    return (
        <>
            {isPostFetching ? <Loader /> :
                <div className="container">
                    <input
                        type="search"
                        value={searchKeyword}
                        onChange={handleChange}
                        className="input"
                        placeholder="Search by title"
                    />
                    <div className="post-list">
                        {
                            filterdPosts && filterdPosts.length > 0 ? (
                                filterdPosts.map((post) => (
                                    <li key={post.id} className="post">
                                        <span className="post-title">{post.title}</span>
                                        <span className="post-body">{post.body}</span>
                                    </li>
                                ))
                            )
                                : (
                                    <h1 className='no-result'>No results found!</h1>
                                )}
                    </div>
                    {postData && postData.meta && filterdPosts && filterdPosts.length > 0 && postData.meta.pagination &&
                        <div className='my-20px'>
                            < Pagination responsive showSizeChanger={false} defaultCurrent={postData.meta.pagination.page}
                                onChange={handleChangePagination} total={postData.meta.pagination.total} defaultPageSize={20}
                            />
                        </div>
                    }
                </div >
            }

        </>

    );
};

