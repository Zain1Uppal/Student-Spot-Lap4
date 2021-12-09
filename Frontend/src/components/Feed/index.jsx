import React from 'react';
import { CreatePost, Post } from '../index';
import './style.css'

export function Feed({ userId }) {
    return (
        <div className="feed">
            <div className="feed-wrapper">
                <CreatePost userId={userId} />
                <Post userId={userId} />
            </div>

        </div>
    )
}
