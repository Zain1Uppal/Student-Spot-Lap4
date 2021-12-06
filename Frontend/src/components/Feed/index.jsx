import React from 'react';
import { CreatePost, Post } from '../index';
import './style.css'

export function Feed() {
    return (
        <div className="feed">
            <div className="feed-wrapper">
                <CreatePost />
                <Post />
            </div>
            
        </div>
    )
}
