import React, { useRef, useState, useEffect }from 'react';
import './style.css';

export function CreatePost({userId}) {
    const [postBody, setPostBody] = useState('') 
    const [body, setBody] = useState('')

    console.log('what is this'+userId)
    const post = {
        body: postBody,
        poster: userId
    }
    console.log('this is the post'+ JSON.stringify(post))
    const postDescription = useRef()
    useEffect(() => {
        fetch('http://localhost:8000/posts/new/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(post)
        })
    },[postBody])

    function onSubmit(e){
        e.preventDefault()
        setPostBody(body)
    }
    console.log(body)

    return(
        <div className="create-post">
            <form className="cp-wrapper" onSubmit={e => onSubmit(e)}>
                <textarea className="cp-input" placeholder="Share your thoughts..." maxLength="250" ref={postDescription}  onChange={e => setBody(e.target.value)}required></textarea>
                <button className="cp-button">+</button>
            </form>
        </div>
    )
}