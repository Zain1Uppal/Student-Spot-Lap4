import React, {useState,useEffect} from 'react';
import './style.css'

export function Post({userId}) {
    const [postData, setPostData] = useState([])
    let userName = localStorage.getItem('userName')

    const [ liked, setLiked ] = useState(false);
    const [ unliked, setUnliked ] = useState(false);

    const [ deletePost, setDeletePost ] = useState(false);


    useEffect(()=>{
        console.log(userId)
        fetch(`https://studenthub-api.herokuapp.com/posts/users/${userName}/following`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => setPostData(data.data))
    },[])

    // useEffect(() => {
    //     fetch(`https://studenthub-api.herokuapp.com/posts/${post_id}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             Authorization: `Token ${localStorage.getItem('token')}`
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(setDeletePost(true))
        
    // })

    const handleLiked = e => {
        e.preventDefault()
        setLiked(prev => !prev)
    }

    const handleUnliked = e => {
        e.preventDefault();
        setUnliked(prev => !prev)
    }
    
    function dataPost(){
        return(
          postData.reverse().map((p, i) => 
            <div className="post-feed" key={i}>
                <div className="post-wrapper">
                    <div className="post-top">
                        <div className="post-top-left">
                            <img className="post-profile-pic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png" alt="user-pic"/>
                            <span className="post-username">{p.poster}</span>
                            <span className="post-date">{p.date}</span>
                        </div>
                        <div className="post-top-right">
                            <i className="fas fa-trash"></i>
                            {/* <select>
                                <option></option>
                                <option value="edit">Edit</option>
                                <option value="delete">Delete</option>
                            </select> */}
                        </div>
                        
                    </div>
                    <div className="post-center">
                        <span className="post-text" >{p.body}</span>
                    </div>
                    <div className="post-bottom">
                        <div className="post-bottom-left">
                            <i className="fas fa-thumbs-up" role="switch" onClick={handleLiked} style={{color: liked ? 'darkblue' : 'grey'}}><span className="reaction-num" >{p.reactions.thumbs_up}</span></i>
                            <i className="fas fa-thumbs-down" role="switch" onClick={handleUnliked} style={{ color: unliked ? 'darkred' : 'grey'}}><span className="reaction-num">{p.reactions.thumbs_down}</span></i>
                        </div>
                        <div className="post-bottom-right">
                            <div className="post-comment-text">Add a comment</div>
                        </div>
                    </div>
                </div>
            </div>
          )
        )

        
    }

    return(
        <div className='overall'>
            {dataPost()}
        </div>
    )
}