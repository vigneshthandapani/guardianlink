import React from 'react';
import './Card.css';

export const Card = (props) => {

    const { title, value, imgSrc } = props;
    return (
        <div className='card'>
            <div className='card-header'>
                {title}
            </div>
            <div className='card-body'>
                {imgSrc && <img src={imgSrc} width={60}  />}
                {value}
            </div>
        </div>
    )
}
