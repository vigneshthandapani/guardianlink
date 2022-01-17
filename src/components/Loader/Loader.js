import React from 'react';
import { Spin } from 'antd';
import "./Loader.css";

export const Loader = () => {
    return (
        <div id="loader">
            <Spin tip="Loading..." size='large'></Spin>
        </div>
    )
}