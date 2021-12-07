import React, { useState, useEffect, Fragment } from 'react';
import './style.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from '../../layout/index';
// import '@popperjs/core';
// import {default as email} from '../../views/auth/Signup';
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
       
      <div>
         
        <Header />
        {loading === false && (  
        <div className="page-holder">
            <div className="contentDiv">
                  <div className="">
                    <h1 className="page-heading">{userName}'s Profile</h1>
                  </div>
              <section>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="card card-profile">
                      <div className="card-header" style={{backgroundImage: "url(https://pbs.twimg.com/media/EeI6u48WkAAC45D.jpg)"}}> </div>
                      <div className="card-body text-center"> <img className="card-profile-img" src="https://i.pinimg.com/originals/d7/fd/9e/d7fd9e0b952d5f9b9adff6ec29a8b20d.png" alt="profile img"/>
                        <h3 className="mb-3">{firstName}</h3>
                        <p className="mb-4">University Course goes here</p>
                        <p className="mb-4">University here</p>
                        <div className= "btn-toolbar">
                        <button className="btn btn-outline-secondary" type="button"><i className="fa fa-paper-plane"></i> My Messages</button>
                        </div>
                      </div>
                    </div>
                    <div className="card mb-4">
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <div className="flex-grow-1 ps-3">
                            <h4>Follow me:</h4>
                            <p className="text-muted mb-0">Social media links here</p>
                            <ul className="social-links list-inline mb-0 mt-2">
                              <li className="list-inline-item"><a href="https://www.google.com/" data-bs-toggle="#tooltip" data-placement="top" title="" data-bs-original-title="Bob's Facebook" aria-label="Bob's Facebook"><i className="fab fa-facebook"></i></a></li>
                              <li className="list-inline-item"><a href="https://www.google.com/" data-bs-toggle="#tooltip" data-placement="top" title="" data-bs-original-title="@bob" aria-label="@bob"><i className="fab fa-twitter"></i></a></li>
                              <li className="list-inline-item"><a href="https://www.google.com/" data-bs-toggle="#tooltip" data-placement="top" title="" data-bs-original-title="@bob" aria-label="@bob"><i className="fab fa-instagram"></i></a></li>
                              <li className="list-inline-item"><a href="https://www.google.com/" data-bs-toggle="#tooltip" data-placement="top" title="" data-bs-original-title="@nathan" aria-label="@bob"><i className="fab fa-skype"></i></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <form className="card mb-4">
                      <div className="card-header">
                        <h4 className="card-heading">My Profile</h4>
                      </div>
                      <div className="card-body">
                        <div className="row mb-3">
                          <div className="col-auto d-flex align-items-center"><img className="avatar avatar-lg p-1" src="https://i.pinimg.com/originals/d7/fd/9e/d7fd9e0b952d5f9b9adff6ec29a8b20d.png" alt="Avatar"/></div>
                          <div className="col">
                            <label className="form-label">Name</label>
                            <input className="form-control" placeholder={firstName}/>
                          </div>
                        </div>
                        <div className="mb-3"> 
                          <label className="form-label">Bio</label>
                          <textarea className="form-control" rows="8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</textarea>
                        </div>
                        {/* can be added when changing password/email */}
                        {/* <div className="mb-3"> 
                          <label className="form-label">Email</label>
                          <input className="form-control" placeholder="you@domain.com"/>
                        </div>
                        <label className="form-label">Password</label>
                        <input className="form-control" type="password" value="password" />
                      </div>
                      <div className="card-footer text-end">
                        <button className="btn btn-primary">Save</button>
                      </div> */}

                      </div>
                    </form>
                  </div>
                </div>
              </section>
            </div>
            <div className="col-lg-8">
              <h1>hi, is this connected?</h1>
            </div>
          
          </div>
          )}
      </div>
    )
    
  };


export default Profile;