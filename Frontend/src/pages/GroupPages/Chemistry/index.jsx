import React from 'react';
import { Header } from '../../../layout/index';
import { LeftSideBar, GroupSection } from '../../../components/index';
import './style.css';

export function Chemistry(){

    return(
        <div className="chemistry-page">
            <Header />
            <div className="content-chemistry">
                <LeftSideBar />
                <div className="group-chemistry">
                    <h1>Chemistry</h1>
                    <GroupSection />
                </div>
                
                
                
            </div>
        </div> 
    )
}

