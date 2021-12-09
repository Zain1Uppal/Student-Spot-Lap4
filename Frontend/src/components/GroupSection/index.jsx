import React, {useEffect, useState} from 'react';
import { GroupCreatePost, Post } from '../index';
import { Header } from '../../layout/Header/index'
import { LeftSideBar } from '../LeftSideBar';

import './style.css';

export function GroupSection(cateName) {
    const [cateId, setCateId] = useState()
    const [catePosts, setCatePosts] = useState()
    const [loading1, setLoading1] = useState(true)

    let category = cateName.cateName
    useEffect(() => {
        fetch(`https://studenthub-api.herokuapp.com/categories`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${localStorage.getItem('token')}`
            },
        }).then(res=>res.json())
        .then(data => {
            data.data.map((i) => {
                let firstCap = category.charAt(0).toUpperCase() + category.slice(1)
                if(firstCap === i.name){ 
                    setCateId(i.id)
                }else{
                    console.log('error')
                }
            })
        })
    },[category])

    useEffect(()=>{
        fetch(`https://studenthub-api.herokuapp.com/posts/categories/${cateId}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${localStorage.getItem('token')}`
            },
        }).then(res => res.json())
        .then(data => {
            setCatePosts(data.data)
            console.log(data.data)
            setLoading1(false)
        })
    },[cateId])


    function renderId(){
        if(loading1){
            return(
                <h1>loading</h1>
            )
        }else{
            return(
                catePosts.map((p,i) => {
                    return(

                        <div className="post-feed" key={i}>
                            <div className="post-wrapper">
                                <div className="post-top">
                                    <div className="post-top-left">
                                        <img className="post-profile-pic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png" alt="user-pic"/>
                                        <span className="post-username">{p.poster}</span>
                                        <span className="post-date">{p.date}</span>
                                    </div>
                                    <div className="post-top-right"></div>
                                    <i className="fas fa-caret-down"></i>
                                </div>
                                <div className="post-center">
                                    <span className="post-text" >{p.body}</span>
                                </div>
                                <div className="post-bottom">
                                    <div className="post-bottom-left">
                                        <i className="fas fa-thumbs-up">{p.reactions.thumbs_up}</i>
                                        <i className="fas fa-thumbs-down">{p.reactions.thumbs_down}</i>
                                    </div>
                                    <div className="post-bottom-right">
                                        <div className="post-comment-text">Add a comment</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            )
        }
    }

    return(
        <div className="biology-page">
            <div className="content-biology">
                <div className="group-biology">
                    {renderId()}    
                </div>
                
                
                
            </div>
        </div> 
    )
}