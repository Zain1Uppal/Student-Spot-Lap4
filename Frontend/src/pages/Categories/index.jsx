import React from 'react';
import { Header } from '../../layout/index';
import { CategorySearch, LeftSideBar } from '../../components/index';
import { GroupSection } from '../../components/GroupSection';
import {useParams} from 'react-router';
import './style.css';

export function Categories() {
    let cateName = window.location.href
    console.log(cateName)
    return(
        <div className="categories-page">
            <Header />
            <div className="content-categories">
                <LeftSideBar />
                <GroupSection/>
            </div>
        </div>        
        
    )
}