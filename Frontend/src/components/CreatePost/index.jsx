import React, { useRef, useState, useEffect }from 'react';
import { Categories } from '../../pages';
import './style.css';

export function CreatePost({userId}) {
    const [postBody, setPostBody] = useState('') 
    const [body, setBody] = useState('')
    const [category, setCategory] = useState([])
    const [getCategories, setGetCategories] = useState()
    const [loading, setLoading] = useState(true)

    const post = {
        body: postBody,
        poster: localStorage.getItem('userName'),
        tags: category
    }
    console.log('this is the post'+ JSON.stringify(post))
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
    },[postBody])
    
    useEffect(() => {
        fetch('https://studenthub-api.herokuapp.com/categories/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem('token')}`
            },
        }).then(res => res.json())
        .then(data => {
            setGetCategories(data.data)
            setLoading(false)
        })
    },[])
    
    function onSubmit(e){
        e.preventDefault()
        setPostBody(body)
        console.log(category)
    }
    function handleChange(e){
        let value = (e.target.value)
        let catIndex = category.indexOf(value)
        if(catIndex === -1){
            setCategory((prevState) => [...prevState,value])
        }else{
            setCategory((prevState) => [...prevState.slice(0, catIndex), ...prevState.slice(catIndex + 1)])
            
        }
        
    }
        
        function categoriesShow(){
            if(loading){
                return(
                    <h1>loading</h1>
                )
            }else{
                return getCategories.map((c, i) => {
                    return(
                        <li key={i}><input  type="checkbox" id={c.name} value={c.id} /><label htmlFor={c.name}>{c.name}</label></li>
                    )
            })

        }
    }

    return(
        <div className="create-post">
            <form className="cp-wrapper" onSubmit={e => onSubmit(e)}>
                <textarea className="cp-input" placeholder="Share your thoughts..." maxLength="220" ref={postDescription}  onChange={e => setBody(e.target.value)}required></textarea>
                <button className="cp-button">+</button>
                <div className="tag-wrapper">
                    <ul className="ks-cboxtags" onChange={handleChange}>
                        {categoriesShow()}
                    </ul>
                </div>
            </form>
        </div>
    )
}
