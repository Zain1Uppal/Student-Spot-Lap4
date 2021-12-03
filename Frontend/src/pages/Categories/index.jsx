import React from 'react';
import { Header } from '../../layout/index';
import { CategorySearch } from '../../components/index';
import './style.css';

export function Categories() {

    return(
        <main>
            <Header />
            <div className="content">
                <h1>Categories page</h1>
                <CategorySearch />
            </div>
        </main>
        
        
    )
}