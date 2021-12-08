import React from 'react';
import { Header } from '../../../layout/index';
import { LeftSideBar, GroupSection } from '../../../components/index';
import './style.css';

export function Physics(){

    return(
        <div className="physics-page">
            <Header />
            <div className="content-physics">
                <LeftSideBar />
                <div className="group-physics">
                    <h1>Physics</h1>
                    <GroupSection />
                </div>
                
                
                
                
            </div>
        </div> 
    )
}

