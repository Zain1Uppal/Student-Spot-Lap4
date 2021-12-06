import React from 'react';
import './style.css';

export const NewsItem = ({ title, description, url, urlToImage}) => {

    return(
        <div className="newsItem-cont">
            <img className="news-image" src={urlToImage} alt="News image"/>
            <a className="news-title" href={url}>{title}</a>
            <p className="news-description">{description}</p>

        </div>
    )
}