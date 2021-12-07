import React, {useState, useEffect} from 'react';
import './style.css';

export function RightSideBar() {

    const [ username, setUsername ] = useState("");

    useEffect(() => {
        if (!localStorage.getItem('token')) {
          window.location.replace('http://localhost:8080/login');
        } else {
          fetch('http://localhost:8000/users/auth/user/', {
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
              setUsername(data.username);
            });
        }
    }, []);

    return (
        <div className="right-side-bar">
            <div className="right-side-top">
                <div className="rsb-pic-cont">
                    <img className="rsb-user-pic"src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png" alt="rsb-friend-pic"/>
                </div>
                <div className="rst-username">{username}</div>
            </div>
            <hr />
            <ul className="right-side-bottom">
                <p>Following:</p>
                <li className="rsb-friend">
                    <div className="rsb-friend-pic-cont">
                        <img className="rsb-friend-pic"src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png" alt="rsb-friend-pic"/>
                    </div>   
                    <div className="rsb-friend-username">Friend 1</div>
                </li>
                <li className="rsb-friend">
                    <div className="rsb-friend-pic-cont">
                        <img className="rsb-friend-pic"src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png" alt="rsb-friend-pic"/>
                    </div>   
                    <div className="rsb-friend-username">Friend 2</div>
                </li>
               


            </ul>
            
        </div>
    )
}
