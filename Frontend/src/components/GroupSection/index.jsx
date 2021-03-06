import React, { useEffect, useState } from 'react';
import './style.css';
import { origin, api } from '../../Urls'

export function GroupSection(cateName) {
    const [cateId, setCateId] = useState()
    const [catePosts, setCatePosts] = useState()
    const [loading1, setLoading1] = useState(true)

    const [liked, setLiked] = useState(false);
    const [unliked, setUnliked] = useState(false);


    let category = cateName.cateName
    useEffect(() => {
        fetch(`${api}/categories`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${localStorage.getItem('token')}`
            },
        }).then(res => res.json())
            .then(data => {
                let datamap = data.data.map((i) => {
                    let firstCap = category.charAt(0).toUpperCase() + category.slice(1)
                    if (firstCap === i.name) {
                        setCateId(i.id)
                        return true
                    } else {
                        return false
                    }
                })
                if (!datamap.includes(true)) {
                    window.location.replace(`${origin}/404`)
                }
            })
    }, [category])

    useEffect(() => {
        if (cateId) {
            fetch(`${api}/posts/categories/${cateId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${localStorage.getItem('token')}`
                },
            }).then(res => {
                if (res.status === 200) {
                    return res.json()
                } else if (res.status === 404) {
                    window.location.replace(`${urls.origin}/404`);
                } else {
                    window.location.replace(`${urls.origin}/mainfeed`);
                }
            }).then(data => {
                setCatePosts(data.data)
                setLoading1(false)
            })
        }
    }, [cateId])

    const handleLiked = e => {
        e.preventDefault()
        setLiked(prev => !prev)
    }

    const handleUnliked = e => {
        e.preventDefault();
        setUnliked(prev => !prev)
    }

    function renderId() {
        if (loading1) {
            return (
                <h1>loading</h1>
            )
        } else {
            return (
                catePosts.map((p, i) => {
                    return (

                        <div className="post-feed1" key={i} style={{ width: "700px" }}>
                            <div style={{ padding: '15px', fontWeight: 'bolder', fontSize: '1.5rem', color: '#00308F' }}>{category}</div>
                            <div className="post-wrapper" style={{ width: "600px" }}>
                                <div className="post-top">
                                    <div className="post-top-left">
                                        <img className="post-profile-pic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png" alt="user-pic" />
                                        <span className="post-username">{p.poster}</span>
                                        <span className="post-date">{p.date}</span>
                                    </div>
                                    <div className="post-top-right"></div>
                                    <i className="fas fa-trash"></i>
                                </div>
                                <div className="post-center">
                                    <span className="post-text" >{p.body}</span>
                                </div>
                                <div className="post-bottom">
                                    <div className="post-bottom-left">
                                        <i className="fas fa-thumbs-up" role="switch" onClick={handleLiked} style={{ color: liked ? 'darkblue' : 'grey' }}><span className="reaction-num" >{p.reactions.thumbs_up}</span></i>
                                        <i className="fas fa-thumbs-down" role="switch" onClick={handleUnliked} style={{ color: unliked ? 'darkred' : 'grey' }}><span className="reaction-num">{p.reactions.thumbs_down}</span></i>
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

    return (
        <div className="biology-page">
            <div className="content-biology">
                <div className="group-biology">
                    {renderId()}
                </div>



            </div>
        </div>
    )
}