import React, { useState, useEffect, useRef } from 'react';
import './style.css'

export function GroupCreatePost({ userId }) {
    const [postBody, setPostBody] = useState('')
    const [body, setBody] = useState('')
    const [category, setCategory] = useState()



    const post = {
        body: postBody,
        poster: userId,
        tags: category
    }
    const postDescription = useRef()
    useEffect(() => {
        fetch('https://studenthub-api.herokuapp.com/posts/new/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(post)
        })
    }, [postBody])

    function onSubmit(e) {
        e.preventDefault()
        setPostBody(body)
    }

    return (
        <div className="create-post-gs">
            <form className="cp-wrapper-gs" onSubmit={e => onSubmit(e)}>
                <textarea className="cp-input-gs" placeholder="Share your thoughts..." maxLength="220" ref={postDescription} onChange={e => setBody(e.target.value)} required></textarea>
                <button className="cp-button-gs">+</button>
            </form>
        </div>
    )
}