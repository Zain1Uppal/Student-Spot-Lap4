import React from 'react';
import { Header } from '../../layout/index'
import { ResourcesSB, LeftSideBar } from '../../components/index';
import './style.css';

export function Resources() {

    return(
        <div className="resources-page">
            <Header />
            
            <div className="content-resources">
                <LeftSideBar />
                <ResourcesSB />

            </div>
        </div>
    )
}