import React from 'react';
import { GroupCreatePost, Post } from '../index';
import './style.css';

export function GroupSection() {

    return(
        <div className="gs-title">
            <div className="create-p-cont-gs">
                <GroupCreatePost />
            </div>
            <div className="post-cont-gs">
                ALL POST GOES BELOW. DELETE THIS ONCE ALL CONNECTED
                <Post />
                
            </div>
            
            

        </div>
    )
}