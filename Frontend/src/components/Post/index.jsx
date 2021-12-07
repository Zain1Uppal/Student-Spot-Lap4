import React from 'react';
import './style.css'

export function Post() {


    return(
        <div className="post-feed">
            <div className="post-wrapper">
                <div className="post-top">
                    <div className="post-top-left">
                        <img className="post-profile-pic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png" alt="user-pic"/>
                        <span className="post-username">Username</span>
                        <span className="post-date">5 mins ago</span>
                    </div>
                    <div className="post-top-right"></div>
                    <i className="fas fa-caret-down"></i>
                </div>
                <div className="post-center">
                    <span className="post-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium.</span>
                </div>
                <div className="post-bottom">
                    <div className="post-bottom-left">
                        <i className="fas fa-thumbs-up"></i>
                        <i className="fas fa-thumbs-down"></i>
                    </div>
                    <div className="post-bottom-right">
                        <div className="post-comment-text">Add a comment</div>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}