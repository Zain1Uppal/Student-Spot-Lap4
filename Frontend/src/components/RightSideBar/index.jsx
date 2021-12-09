import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

export function RightSideBar() {
    const [followed, setFollowed] = useState()
    const [loading, setloading] = useState(true)

    let username = localStorage.getItem('userName')

    useEffect(() => {
        if (!localStorage.getItem('token')) {
          window.location.replace('http://localhost:8080/login');
        } else {
          fetch(`https://studenthub-api.herokuapp.com/users/${username}/`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Token ${localStorage.getItem('token')}`
            }
          })
            .then(res => {if(res.status === 200){
                            return res.json()
                          }else{
                            localStorage.clear()
                            window.location.replace('http://localhost:8080/login');
                          }
                        })
            .then(data => { 
              setFollowed(data.data.followed_users)
              setloading(false)
            });
        }
    }, []);

    function renderFollows(){
      if(loading){
        return(
          <h1>loading users</h1>
        )
      }else{ 
        return(
          followed.map((f, i) => {
            return(
            <li className="rsb-friend" key={i}>
              <div className="rsb-friend-pic-cont">
                  <img className="rsb-friend-pic"src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png" alt="rsb-friend-pic"/>
              </div>   

              <div className="rsb-friend-username"><NavLink to={`/users/${f}`} style={{textDecoration:'none'}}>{f}</NavLink></div>

            </li>

            )
          }
          )
        ) 
      }
    }

    return (
        <div className="right-side-bar">
            <div className="right-side-top">
                <div className="rsb-pic-cont">
                    <img className="rsb-user-pic"src="https://i.imgur.com/o9fpo46.jpg" alt="rsb-friend-pic"/>
                </div>
                <div className="rst-username">{username}</div>
            </div>
            <hr />
            <ul className="right-side-bottom">
                <p>Following:</p>
                {renderFollows()}
            </ul>
            
        </div>
    )
}
