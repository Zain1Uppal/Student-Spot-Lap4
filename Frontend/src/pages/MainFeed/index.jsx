import React from 'react';
import { Header } from '../../layout/index';
import { Feed, LeftSideBar, RightSideBar } from '../../components/index'
import './style.css';

export function MainFeed() {

    return(
        
        <main>
            <Header />
            <div className="content">
                <LeftSideBar />
                <Feed />
                <RightSideBar />
                

            </div>
        </main>
    )
}