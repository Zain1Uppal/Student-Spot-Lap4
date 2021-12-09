import React, { useState, useEffect} from 'react';
import {useParams} from 'react-router';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CreatePost, Post } from '../../components/index';
import { Header } from '../../layout/index';
import { ButtonToolbar } from 'react-bootstrap';
// import '@popperjs/core';
// import {default as email} from '../../views/auth/Signup';
export const UserPage = ({match, location}) => {

    const [firstName, setFirstName] = useState('');
    const [username, setUserName] = useState('');
    const [university, setUniversity] = useState('')
    const [course, setCourse] = useState('')
    const [bio, setBio] = useState('')

    const [loading, setLoading] = useState(false);
    let params = useParams()
    let username = params.username
  
    useEffect(() => {
      console.log('before if dashboard')
      if (!localStorage.getItem('token')) {
        console.log('inside first condition')
        window.location.replace('http://localhost:8080/login');
      } else {
        console.log('inside second condition')
        fetch(`https://studenthub-api.herokuapp.com/users/${username}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${localStorage.getItem('token')}`
          }
        })
          .then(res => {if(res.status === 200){
                          return res.json()
                        } else{
                          console.log('error')
                        }
                      })
          .then(data => {
            console.log(data)
            
            setUserName(data.data.username);
            setFirstName(data.data.first_name);
            setBio(data.data.bio);
            setCourse(data.data.course);
            setUniversity(data.data.university);

            // setUniCourse(data.uni_course);
            setLoading(true);
        
          });
      }
    }, []);
      
    return (
      <div className="pp-head">
         
        <Header />
    
        {loading === true && (  

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
                      <div className="card-body1 text-center"> <img className="card-profile-img" src="https://i1.sndcdn.com/artworks-3oZK5ERGW22yFVJk-UvXrTA-t500x500.jpg" alt="profile img"/>
                        <h3 className="mb-3">{username}</h3>
                        <p className="mb-4" style={{fontWeight:'bold', color:'#00308F', fontStyle:'italic'}}>{course}</p>
                        <p className="mb-4">{university}</p>
                        <p className="followers-pp">Followers:</p>
                        <div className="btn-toolbar">
                        <button className="btn btn-outline-secondary" type="button" style={{margin:'10px'}}><i className="fa fa-paper-plane"></i> Message</button> 
 <button className="btn btn-outline-dark" style={{marginLeft:'10px', marginRight:'10px'}} ><i className="fas fa-plus"></i>Follow</button>
<div className="flex-grow-1 ps-3" style={{marginTop:'10px'}}>
  </div>
    <ul className="social-links list-inline mb-0 mt-2">
      <li className="list-inline-item"><a href="https://www.google.com/" data-bs-toggle="#tooltip" data-placement="top" title="" data-bs-original-title="Bob's Facebook" aria-label="Bob's Facebook"><i className="fab fa-facebook"></i></a></li>
      <li className="list-inline-item"><a href="https://www.google.com/" data-bs-toggle="#tooltip" data-placement="top" title="" data-bs-original-title="@bob" aria-label="@bob"><i className="fab fa-twitter"></i></a></li>
      <li className="list-inline-item"><a href="https://www.google.com/" data-bs-toggle="#tooltip" data-placement="top" title="" data-bs-original-title="@bob" aria-label="@bob"><i className="fab fa-instagram"></i></a></li>
    </ul>
  </div>
                      </div>
                    </div>
                    
                    <div className=" card-profile-div">
                      
                      <h4 className="card-heading"></h4>
                     
    
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

       

export default UserPage;


