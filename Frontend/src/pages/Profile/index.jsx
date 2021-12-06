import React from 'react';
import { Header } from '../../layout/index';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {default as email} from '../../views/auth/Signup';
class Profile extends React.Component {
  
 
  render() {
   
  return (
    <>
      <Header />
    
      <div className="page-holder bg-gray-100">
          <div className="container-fluid px-lg-4 px-xl-5 contentDiv">
                <div className="page-header mb-4">
                  <h1 className="page-heading">{name}'s Profile</h1>
                </div>
            <section>
              <div className="row">
                <div className="col-lg-4">
                  <div className="card card-profile mb-4">
                    <div className="card-header" style={{backgroundImage: "url(https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img1.jpg)"}}> </div>
                    <div className="card-body text-center"> <img className="card-profile-img" src="https://i.pinimg.com/originals/d7/fd/9e/d7fd9e0b952d5f9b9adff6ec29a8b20d.png" alt="profile img"/>
                      <h3 className="mb-3">{name} Name here</h3>
                      <p className="mb-4">University Course Here</p>
                      <button className="btn btn-outline-dark btn-sm"><span className="fab fa-twitter"></span> Follow</button>
                    </div>
                  </div>
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0"><img className="avatar avatar-lg p-1" src="https://i.pinimg.com/originals/d7/fd/9e/d7fd9e0b952d5f9b9adff6ec29a8b20d.png" alt="Jassa Rich"/></div>
                        <div className="flex-grow-1 ps-3">
                          <h4>Name Here</h4>
                          <p className="text-muted mb-0">Social media links here</p>
                          <ul className="social-links list-inline mb-0 mt-2">
                            <li className="list-inline-item"><a href="javascript:void(0)" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Nathan's Facebook" aria-label="Nathan's Facebook"><i className="fab fa-facebook"></i></a></li>
                            <li className="list-inline-item"><a href="javascript:void(0)" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="@nathan_andrews" aria-label="@nathan_andrews"><i className="fab fa-twitter"></i></a></li>
                            <li className="list-inline-item"><a href="javascript:void(0)" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="+420777555987" aria-label="+420777555987"><i className="fa fa-phone"></i></a></li>
                            <li className="list-inline-item"><a href="javascript:void(0)" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="@nathan" aria-label="@nathan"><i className="fab fa-skype"></i></a></li>
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
                          <input className="form-control" placeholder="Your name"/>
                        </div>
                      </div>
                      <div className="mb-3"> 
                        <label className="form-label">Bio</label>
                        <textarea className="form-control" rows="8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</textarea>
                      </div>
                      <div className="mb-3"> 
                        <label className="form-label">Email</label>
                        <input className="form-control" placeholder="you@domain.com"/>
                      </div>
                      <label className="form-label">Password</label>
                      <input className="form-control" type="password" value="password" />
                    </div>
                    <div className="card-footer text-end">
                      <button className="btn btn-primary">Save</button>
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
                        <div className="col-md-5">
                          <div className="mb-4">
                            <label className="form-label">University</label>
                            <input className="form-control" type="text" placeholder="University" value="King's College London"/>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                          <div className="mb-4">
                            <label className="form-label">Username</label>
                            <input className="form-control" type="text" placeholder="Username" value="Rachiey"/>
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
                            <input className="form-control" type="text" placeholder="First name"/>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-6">
                          <div className="mb-4">
                            <label className="form-label">Last Name</label>
                            <input className="form-control" type="text" placeholder="Last Name"/>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-4">
                            <label className="form-label">Address</label>
                            <input className="form-control" type="text" placeholder="Home Address"/>
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
                            <label className="form-label">About Me</label>
                            <textarea className="form-control" rows="5" placeholder="Here can be your description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer text-end">
                      <button className="btn btn-primary" type="submit">Update Profile</button>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        
        </div>
    </>
    
      
   
)
};
}
export default Profile;
