import React from 'react';
import { Header } from '../../../layout/index';
import { LeftSideBar, NewsList } from '../../../components/index';
import './style.css';

export function Biology(){

    return(
        <div className="biology-page">
            <Header />
            <div className="content-biology">
                <LeftSideBar />
                <NewsList />
                
            </div>
        </div> 
    )
}