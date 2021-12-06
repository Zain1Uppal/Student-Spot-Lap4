import React, {useState, useEffect } from 'react';
import { NewsItem } from '../index'
import axios from 'axios';
import './style.css';

export const NewsList = () => {

    const [ articles, setArticles ] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const res = await axios.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=39bbb537fd7d4b2ab94e2d8c5fc3f6b2')
            setArticles(res.data.articles)
            
        }
        getArticles();
    }, []);
    
    return(
        <div>
            {articles.map(({title, description, url, urlToImage}) => (
                <NewsItem 
                title={title}
                description={description}
                url={url}
                urlToImage={urlToImage}/>
            ))}
            
        </div>
    )
}