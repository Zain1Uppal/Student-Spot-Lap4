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
                <textarea className="cp-input" placeholder="Share your thoughts..." maxLength="220" ref={postDescription}  onChange={e => setBody(e.target.value)}required></textarea>
                <button className="cp-button">+</button>
                <div className="tag-wrapper">
                    <ul class="ks-cboxtags">
                        <li><input type="checkbox" id="biology" value="biology" /><label for="biology">Biology</label></li>
                        <li><input type="checkbox" id="chemsitry" value="chemistry" /><label for="chemsitry">Chemistry</label></li>
                        <li><input type="checkbox" id="computing" value="computing" /><label for="computing">Computing</label></li>
                        <li><input type="checkbox" id="english" value="english" /><label for="english">English</label></li>
                        <li><input type="checkbox" id="maths" value="maths" /><label for="maths">Maths</label></li>
                        <li><input type="checkbox" id="physics" value="physics" /><label for="physics">Physics</label></li>
                    </ul>
                </div>
            </form>
        </div>
    )
}