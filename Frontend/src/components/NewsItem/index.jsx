import React from 'react';
import './style.css';

export const NewsItem = ({ title, description, url, urlToImage}) => {

    return(
        <div className="newsItem-cont">

            <a href={url} target="_blank"><img className="news-image" src={urlToImage} alt="News image"/></a>
            <h3 className="news-title">{title}</h3>
            <p className="news-description">{description}</p>

        </div>
    )
}