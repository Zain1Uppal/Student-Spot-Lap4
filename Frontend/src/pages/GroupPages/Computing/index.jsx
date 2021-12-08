import React from 'react';
import { Header } from '../../../layout/index';
import { LeftSideBar, GroupSection } from '../../../components/index';
import './style.css';

export function Computing(){

    return(
        <div className="computing-page">
        <Header />
        <div className="content-computing">
            <LeftSideBar />
            <div className="group-computing">
                <h1>Computing</h1>
                <GroupSection />
            </div>
            
            
            
            
        </div>
    </div> 
    )
}
