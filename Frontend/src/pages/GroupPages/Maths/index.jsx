import React from 'react';
import { Header } from '../../../layout/index';
import { LeftSideBar, GroupSection } from '../../../components/index';
import './style.css';

export function Maths(){

    return(
        <div className="maths-page">
            <Header />
            <div className="content-maths">
                <LeftSideBar />
                <div className="group-maths">
                    <h1>Maths</h1>
                    <GroupSection />
                </div>
                
                
                
                
            </div>
        </div> 
    )
}

