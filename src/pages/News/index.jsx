import React from 'react';
import { Header } from '../../layout/index'
import { LeftSideBar, NewsList } from '../../components/index';
import './style.css';

export function News() {

    return(
        <div className="news-page">
            <Header />
            
            <div className="content-news">
                <LeftSideBar />
                <NewsList />

                

            </div>
        </div>
    )
}