import React, { useState, useEffect} from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from '../../layout/index';
// import '@popperjs/core';
// import {default as email} from '../../views/auth/Signup';
export const UserPage = ({match, location}) => {

    const [firstName, setFirstName] = useState('');
    // const [uniCourse, setUniCourse] = useState('');
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      console.log('before if dashboard')
      if (!localStorage.getItem('token')) {
        console.log('inside first condition')
        window.location.replace('http://localhost:8080/login');
      } else {
        console.log('inside second condition')
        fetch('https://studenthub-api.herokuapp.com/users/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${localStorage.getItem('token')}`
          }
        })
          .then(res => {if(res.status === 200){
                          return res.json()
                        } else{
                          localStorage.clear()
                          window.location.replace('http://localhost:8080/login');
                        }
                      })
          .then(data => {
            console.log(data)
            setUserName(data.username);
            setFirstName(data.first_name);
            // setUniCourse(data.uni_course);
            setLoading(true);
        
          });
      }
    }, []);
      
    return (
       
      <div>
    
        <Header />
        {loading === true && (  
        <div className="page-holder bg-gray-100">
            <div className="container-fluid px-lg-4 px-xl-5 contentDiv">
                  <div className="page-header mb-4">
                    <h1 className="page-heading">{userName}'s Profile</h1>
                  </div>
              <section>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="card card-profile mb-4">
                      <div className="card-header" style={{backgroundImage: "url(https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img1.jpg)"}}> </div>
                      <div className="card-body text-center"> <img className="card-profile-img" src="https://i.pinimg.com/originals/d7/fd/9e/d7fd9e0b952d5f9b9adff6ec29a8b20d.png" alt="profile img"/>
                        <h3 className="mb-3">first name should go here: {username}</h3>
                        <p className="mb-4">University Course goes here </p>
                        <p className="mb-4">University here </p>
                        <div className= "btn-toolbar">
                        <button className="btn btn-outline-secondary" type="button"><i className="fa fa-paper-plane"></i> Message</button>
                        {/* not needed on own profile */}
                       
                        <button className="btn btn-outline-dark"><i className="fas fa-plus"></i>Follow</button>
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
                            <label className="form-label">Name here</label>
                            <p className="mb-4">Location here </p>
                          </div>
                        </div>
                        <div className="mb-3"> 
                          <label className="form-label">Bio</label>
                          <p className="mb-4">Bio here </p>
                        </div>
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
                  </div>
                </div>
              </section>
            </div>
          
          </div>
          )}
      </div>
    )
    
  };


export default UserPage;