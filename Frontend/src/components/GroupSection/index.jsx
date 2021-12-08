import React, {useEffect, useState} from 'react';
import { GroupCreatePost, Post } from '../index';
import { Header } from '../../layout/Header/index'
import { LeftSideBar } from '../LeftSideBar';

import './style.css';

export function GroupSection() {

    useEffect(() => {
        fetch(`https://studenthub-api.herokuapp.com/categories`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${localStorage.getItem('token')}`
            },
        }).then(res=>res.json())
        .then(data => console.log(data))
    })

    return(
        <div className="biology-page">
            <div className="content-biology">
                <div className="group-biology">
                    
                </div>
                
                
                
                
            </div>
        </div> 
    )
}