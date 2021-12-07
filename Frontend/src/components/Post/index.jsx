import React, {useState,useEffect} from 'react';
import './style.css'

export function Post({userId}) {
    const [postData, setPostData] = useState([])
    useEffect(()=>{
        console.log(userId)
        fetch(`http://localhost:8000/posts/users/${userId}/following`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => setPostData(data.data))
    },[])
    
    function dataPost(){
        return(
          postData.map((p, i) => 
            <div className="post-feed" key={i}>
                <div className="post-wrapper">
                    <div className="post-top">
                        <div className="post-top-left">
                            <img className="post-profile-pic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png" alt="user-pic"/>
                            <span className="post-username">Username</span>
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
        )

        
    }

    return(
        <div className='overall'>
            {dataPost()}
        </div>
    )
}