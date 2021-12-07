import React, { useRef }from 'react';
import './style.css';

export function CreatePost() {

    const postDescription = useRef()
    

    return(
        <div className="create-post">
            <form className="cp-wrapper">
                <textarea className="cp-input" placeholder="Share your thoughts..." maxLength="250" ref={postDescription} required></textarea>
                <button className="cp-button">+</button>
            </form>
        </div>
    )
}