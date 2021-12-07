import React from 'react';
import './style.css';
import { Header } from '../../layout';
import { LeftSideBar } from '../../components';

export function Category() {

    return(
        <main>
        <Header />

        <div className="content">
            <LeftSideBar />
            <h1>Maths</h1>
   
        </div>
    </main>
    
    )
}