import React from 'react';
import { CreatePost, Post } from '../index';
import './style.css'

export function Feed({userId}) {
    console.log('feed'+userId)
    return (
        <div className="feed">
            <div className="feed-wrapper">
                <CreatePost />
                <Post userId={userId}/>
            </div>
            
        </div>
    )
}
