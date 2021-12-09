import React, { useState, useEffect, Fragment } from 'react';
import { CreatePost, Post, Modal } from '../../components/index';
import './style.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from '../../layout/index';
// import '@popperjs/core';
// import {default as email} from '../../views/auth/Signup';
export const Profile = () => {
    const [firstName, setFirstName] = useState('');
    const [university, setUniversity] = useState('')
    const [course, setCourse] = useState('')
    const [bio, setBio] = useState('')

    let username = localStorage.getItem('userName')
    // const [uniCourse, setUniCourse] = useState('');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      console.log('before if dashboard')
      if (!localStorage.getItem('token')) {
        console.log('inside first condition')
        window.location.replace('http://localhost:8080/login');
      } else {
        console.log('inside second condition')
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
            console.log(data.data)
            setUniversity(data.data.university)
            setCourse(data.data.course)
            setBio(data.data.bio)

            setLoading(false);
          });
      }
    }, []);
      
    return (
       
      <div className="pp-head">
         
        <Header />
    
        {loading === false && (  
        <div className="page-holder">
            <div className="col-lg-4">
                  <div className="">
                    <h1 className="page-heading1">{username}'s Profile</h1>
                  </div>
              <section>
                <div className="row">
                  <div className="col-lg-41">
                    <div className="card1 card-profile1">
                      <div className="card-header" style={{backgroundImage: "url(https://pbs.twimg.com/media/EeI6u48WkAAC45D.jpg)"}}> </div>
                      <div className="card-body1 text-center"> <img className="card-profile-img" src="https://i.pinimg.com/originals/d7/fd/9e/d7fd9e0b952d5f9b9adff6ec29a8b20d.png" alt="profile img"/>
                        <h3 className="mb-3">{username}</h3>
                        <p className="mb-4" style={{fontWeight:'bold', color:'#00308F', fontStyle:'italic'}}>{course}</p>
                        <p className="mb-4">{university}</p>
                        <p className="followers-pp">Followers:</p>
                      </div>
                    </div>
                    
                    <div className=" card-profile-div">
                      
                      <h4 className="card-heading"></h4>
                      <div className="modalContainer" style={{display: 'flex', justifyContent: 'center', marginBottom: '15px'}}> <Modal /> </div>
    
                      <div className="card-body">
                      <h4 className="user-bio-pp" style={{fontWeight:'900', color:'#00308F', fontStyle:'italic' }}>About Me</h4>
                        <h4 className="user-bio-pp">{bio}</h4>
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