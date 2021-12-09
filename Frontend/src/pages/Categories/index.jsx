import React from 'react';
import { Header } from '../../layout/index';
import { CategorySearch, LeftSideBar } from '../../components/index';
import { GroupSection } from '../../components/GroupSection';
import {useParams} from 'react-router';
import './style.css';

export function Categories() {
    const params = useParams()
    return(
        <div className="categories-page">
            <Header />
            <div className="content-categories">
                <LeftSideBar />
                <GroupSection cateName={params.cateName}/>
            </div>
        </div>        
        
    )
}