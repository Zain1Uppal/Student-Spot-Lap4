import React from 'react';
import { Header } from '../../../layout/index';
import { LeftSideBar, GroupSection } from '../../../components/index';
import './style.css';

export function English(){

    return(
        <div className="english-page">
            <Header />
            <div className="content-english">
                <LeftSideBar />
                <div className="group-english">
                    <h1>English</h1>
                    <GroupSection />
                </div>
                
                
                
                
            </div>
        </div> 
    )
}
