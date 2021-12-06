import React from 'react';
import { CreatePost, Post } from '../index';
import './style.css'

export function Feed(user_id) {
    return (
        <div className="feed">
            <div className="feed-wrapper">
                <CreatePost />
                <Post userId={user_id}/>
            </div>
            
        </div>
    )
}
