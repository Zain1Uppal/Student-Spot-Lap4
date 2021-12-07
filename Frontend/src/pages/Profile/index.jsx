import React, { useState, useEffect, Fragment } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
        <div className="page-holder bg-gray-100">
            <div className="container-fluid px-lg-4 px-xl-5 contentDiv">
                  <div className="page-header mb-4">
                    <h1 className="page-heading">{userName}'s Profile</h1>
                  </div>
              <section>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="card card-profile mb-4">
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
                  <div className="col-lg-8">
                    <div className="card overflow-hidden mb-4">
                      <div className="card-header">
                        <div className="input-group">
                          <input className="form-control" type="text" placeholder="Message"></input>
                          <button className="btn btn-outline-secondary" type="button"><i className="fa fa-paper-plane"></i></button>
                        </div>
                      </div>
                      <div className="list-group rounded-0">
                        <div className="list-group-item border-start-0 border-end-0 py-5 border-top-0">
                          <div className="d-flex">
                            <div className="flex-shrink-0"><img className="avatar avatar-lg p-1" src="https://i.pinimg.com/originals/d7/fd/9e/d7fd9e0b952d5f9b9adff6ec29a8b20d.png" alt="Jassa Rich"/></div>
                            <div className="flex-grow-1 ps-3"><small className="float-right">10 mins ago</small>
                              <h5 className="fw-bold">Jassa Rich</h5>
                              <div className="text-muted text-sm"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                              <div className="d-flex mt-4">
                                <div className="flex-shrink-0"><img className="avatar avatar-md p-1" src="https://i.pinimg.com/originals/9b/a5/86/9ba586b516e875b0c668e6861aa236bf.png" alt="Serenity Mitchelle"/></div>
                                <div className="flex-grow-1 ps-3 text-sm text-muted"><strong className="text-dark">Serenity Mitchelle: </strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                              </div>
                              <div className="d-flex mt-4">
                                <div className="flex-shrink-0"><img className="avatar avatar-md p-1" src="https://i.pinimg.com/originals/cc/25/33/cc25330bf6b8a0c022df9a2f683089aa.png" alt="Tony O'Brian"/></div>
                                <div className="flex-grow-1 ps-3 text-sm text-muted"><strong className="text-dark">Tony O'Brian: </strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="list-group-item border-start-0 border-end-0 py-5">
                          <div className="d-flex">
                            <div className="flex-shrink-0"><img className="avatar avatar-lg p-1" src="https://i.pinimg.com/originals/d7/fd/9e/d7fd9e0b952d5f9b9adff6ec29a8b20d.png" alt="Jassa Rich"/></div>
                            <div className="flex-grow-1 ps-3"><small className="float-right">12 mins ago</small>
                              <h5 className="fw-bold">Jassa Rich</h5>
                              <div className="text-muted text-sm"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                            </div>
                          </div>
                        </div>
                        <div className="list-group-item border-start-0 border-end-0 py-5">
                          <div className="d-flex">
                            <div className="flex-shrink-0"><img className="avatar avatar-lg p-1" src="https://i.pinimg.com/originals/d7/fd/9e/d7fd9e0b952d5f9b9adff6ec29a8b20d.png" alt="Jassa Rich"/></div>
                            <div className="flex-grow-1 ps-3"><small className="float-right">34 mins ago</small>
                              <h5 className="fw-bold">Jassa Rich</h5>
                              <div className="text-muted text-sm"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                              <div className="d-flex mt-4">
                                <div className="flex-shrink-0"><img className="avatar avatar-md p-1" src="https://www.svgrepo.com/show/91050/boy.svg" alt="Javier Gregory"/></div>
                                <div className="flex-grow-1 ps-3 text-sm text-muted"><strong className="text-dark">Javier Gregory: </strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <form className="card mb-4">
                      <div className="card-header">
                        <h4 className="card-heading">Edit Profile</h4>
                      </div>
                      <div className="card-body">
                        <div className="row">
                        <div className="col-sm-6 col-md-6">
                            <div className="mb-4">
                              <label className="form-label">Unviersity Course</label>
                              <input className="form-control" type="text" placeholder="Enter course title here"/>
                            </div>
                          </div>
                          <div className="col-md-5">
                            <div className="mb-4">
                              <label className="form-label">University</label>
                              <select className="form-control custom-select">
                              {/* select value={optionsState} */}
                                <option value="">University of Oxford</option>
                                <option value="">University of Cambridge</option>
                                <option value="">Kings College London</option>
                                <option value="">LSE</option>
                                <option value="">University of St Andrews</option>
                                <option value="">Imperial College London</option>
                                <option value="">Durham University</option>
                                <option value="">Loughborough University</option>
                                <option value="">University College London</option>
                                <option value="">University of Warwick</option>
                                <option value="">University of Bath</option>
                                <option value="">Lancaster University</option>
                                <option value="">University of Edinburgh</option>
                                <option value="">University of Manchester</option>
                                <option value="">University of Exeter</option>
                                <option value="">University of Southampton</option>
                                <option value="">University of Glasgow</option>
                                <option value="">University of London</option>
                                <option value="">University of Bristol</option>
                                <option value="">University of York</option>
                                <option value="">University of Birmingham</option>
                                <option value="">University of Leeds</option>
                                <option value="">University of Nottingham</option>
                                <option value="">University of Sheffield</option>
                                <option value="">University of Essex</option>
                                <option value="">University of Dundee</option>
                                <option value="">University of Liverpool</option>
                                <option value="">University of Surrey</option>
                                <option value="">University of Reading</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-3">
                            <div className="mb-4">
                              <label className="form-label">Username</label>
                              <input className="form-control" type="text" placeholder="Username" value={userName}/>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-4">
                            <div className="mb-4">
                              <label className="form-label">Email address</label>
                              <input className="form-control" type="email" placeholder="Email"/>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-6">
                            <div className="mb-4">
                              <label className="form-label">First Name</label>
                              <input className="form-control" type="text" placeholder={firstName}/>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-6">
                            <div className="mb-4">
                              <label className="form-label">Last Name (optional)</label>
                              <input className="form-control" type="text" placeholder="Last Name"/>
                            </div>
                          </div>
                         
                          <div className="col-sm-6 col-md-4">
                            <div className="mb-4">
                              <label className="form-label">City</label>
                              <input className="form-control" type="text" placeholder="City"/>
                            </div>
                          </div>
                          <div className="col-md-5">
                            <div className="mb-4">
                              <label className="form-label">Country</label>
                              <select className="form-control custom-select">
                                <option value="">UK</option>
                                <option value="">US</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="mb-0">
                              <label className="form-label">Bio</label>
                              <textarea className="form-control" rows="5" placeholder="Here can be your description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer text-end">
                          {/* do something with this button */}
                        <button className="btn btn-primary" type="submit">Update Profile</button>
                      </div>
                    </form>
                  </div>
                </div>
              </section>
            </div>
          
          </div>
          )}
      </div>
    )
    
  };


export default Profile;