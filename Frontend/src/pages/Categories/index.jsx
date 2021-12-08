import React from 'react';
import { Header } from '../../layout/index';
import { CategorySearch, LeftSideBar } from '../../components/index';
import './style.css';

export function Categories() {

    return(
        <div className="categories-page">
            <Header />
            <div className="content-categories">
                <LeftSideBar />
                <CategorySearch />
            </div>
        </div>        
        
    )
}