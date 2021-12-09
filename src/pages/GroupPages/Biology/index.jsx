import React from 'react';
import { Header } from '../../../layout/index';
import { LeftSideBar, GroupSection } from '../../../components/index';
import './style.css';

export function Biology(){

    return(
        <div className="biology-page">
            <Header />
            <div className="content-biology">
                <LeftSideBar />
                <div className="group-biology">
                    <h1>Biology</h1>
                    <GroupSection />
                </div>
                
                
                
                
            </div>
        </div> 
    )
}