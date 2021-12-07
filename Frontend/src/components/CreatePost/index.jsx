import React, { useRef, useState, useEffect }from 'react';
import './style.css';

export function CreatePost({userId}) {
    const [postBody, setPostBody] = useState('') 
    const [body, setBody] = useState('')
    const [category, setCategory] = useState()
    


    const post = {
        body: postBody,
        poster: userId,
        tags: category
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
        console.log('this is the cat'+category)
        
    }
    function handleChange(e){
        let value = Array.from(e.target.selectedOptions, options => options.value)
        console.log('what is this'+value)
        setCategory(value)
    }
    console.log(category)
    return(
        <div className="create-post">
            <form className="cp-wrapper" onSubmit={e => onSubmit(e)}>
                <textarea className="cp-input" placeholder="Share your thoughts..." maxLength="250" ref={postDescription}  onChange={e => setBody(e.target.value)} required></textarea>
                <select name="categories" id="categories" multiple onChange={e => handleChange(e)}>
                    <option value="">-----------</option>
                    <option value='1'>computer</option>
                    <option value="2">science</option>
                </select>
                <button className="cp-button" >+</button>
            </form>
        </div>
    )
}