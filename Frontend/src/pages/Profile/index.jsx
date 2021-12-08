import React, { useState, useEffect, Fragment } from 'react';
import { CreatePost, Post, Modal  } from '../../components/index';
import './style.css';
import { Header } from '../../layout/index';
export const Profile = () => {
    const [userName, setUserName] = useState('');
    const [firstName, setFirstName] = useState('');
    // const [uniCourse, setUniCourse] = useState('');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      console.log('before if dashboard')
      if (!localStorage.getItem('token')) {
        console.log('inside first condition')
        window.location.replace('http://localhost:8080/login');
      } else {
        console.log('inside second condition')
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
              console.log(data)
            setUserName(data.username);
            setFirstName(data.first_name);
            // setUniCourse(data.uni_course);
            setLoading(false);
          });
      }
    }, []);
      
    return (
       
      <div className="pp-head">
         
        <Header />
        {loading === false && (  
        <div className="page-holder">
            <div className="contentDiv">
                  <div className="">
                    <h1 className="page-heading1">{userName}'s Profile</h1>
                  </div>
              <section>
                <div className="row">
                  <div className="col-lg-41">
                    <div className="card1 card-profile1">
                      <div className="card-header" style={{backgroundImage: "url(https://pbs.twimg.com/media/EeI6u48WkAAC45D.jpg)"}}> </div>
                      <div className="card-body1 text-center"> <img className="card-profile-img" src="https://i.pinimg.com/originals/d7/fd/9e/d7fd9e0b952d5f9b9adff6ec29a8b20d.png" alt="profile img"/>
                        <h3 className="mb-3">{userName}</h3>
                        <p className="mb-4">University Course goes here</p>
                        <p className="mb-4">University here</p>
                        <p className="followers-pp">Followers:</p>
                      </div>
                    </div>
                    
                    <div className=" card-profile-div">
                      
                      <h4 className="card-heading">My Profile</h4>
                      
                      
                      <div className="card-body">
                        <h4 className="user-bio-pp">User bio goes here</h4>
                        <Modal />
                        
                        

                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="col-lg-8">
              <div className="create-p-cont">
                <CreatePost />
              </div>
              <div className="pp-post-cont">
                ALL THE POSTS GOES BELOW. DELETE THIS TEXT ONCE ALL IS CONNECTED
                <Post />
                
              </div>
              
            </div>
          
          </div>
          )}
      </div>
    )
    
  };


export default Profile;