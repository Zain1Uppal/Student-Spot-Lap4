import React, { useState, useEffect, Fragment } from 'react';
import { CreatePost, Post, Modal } from '../../components/index';
import './style.css';
import { Header } from '../../layout/index';
import * as urls from '../../Urls'

export const Profile = () => {
  const [firstName, setFirstName] = useState('');
  const [university, setUniversity] = useState('')
  const [course, setCourse] = useState('')
  const [bio, setBio] = useState('')
  const [followers, setFollowers] = useState('')
  const [location, setLocation] = useState('')

  let username = localStorage.getItem('userName')

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      window.location.replace(`${urls.origin}/login`);
    } else {
      fetch(`${urls.api}/users/${username}/`, {

        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem('token')}`
        }
      })
        .then(res => {
          if (res.status === 200) {
            return res.json()
          } else if (res.status === 404) {
            window.location.replace(`${urls.origin}/404`);
          } else {
            window.location.replace(`${urls.origin}/mainfeed`);
          }
        })
        .then(data => {
          setUniversity(data.data.university)
          setCourse(data.data.course)
          setBio(data.data.bio)
          setFollowers(data.data.followers.length)
          setLocation(data.data.location)

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
              <h1 className="page-heading1" style={{ marginLeft: '100px' }} >{username}'s Profile</h1>
            </div>
            <section>
              <div className="row">
                <div className="col-lg-41" style={{ marginLeft: '100px' }}>
                  <div className="card1 card-profile1">
                    <div className="card-header" style={{ backgroundImage: "url(https://pbs.twimg.com/media/EeI6u48WkAAC45D.jpg)" }}> </div>
                    <div className="card-body1 text-center"> <img className="card-profile-img" src="https://i.imgur.com/o9fpo46.jpg" alt="profile img" />
                      <h3 className="mb-3">{username}</h3>
                      <p className="mb-4" style={{ fontWeight: 'bold', color: '#00308F', fontStyle: 'italic' }}>{course}</p>
                      <p className="mb-4">{university}</p>
                      <p className="followers-pp">Followers: {followers}</p>

                      <i className="fas fa-map-marker-alt fa-fw"></i>&nbsp;<span className="ml-1">{location}</span>

                      <div className="flex-grow-1 ps-3" style={{ marginTop: '10px' }}>

                        <ul className="social-links list-inline mb-0 mt-2">
                          <li className="list-inline-item"><a href="https://www.facebook.com/" target="_blank" data-bs-toggle="#tooltip" data-placement="top" title="" data-bs-original-title="Bob's Facebook" aria-label="Bob's Facebook"><i className="fab fa-facebook"></i></a></li>
                          <li className="list-inline-item"><a href="https://twitter.com/" target="_blank" data-bs-toggle="#tooltip" data-placement="top" title="" data-bs-original-title="@bob" aria-label="@bob"><i className="fab fa-twitter"></i></a></li>
                          <li className="list-inline-item"><a href="https://www.instagram.com" target="_blank" data-bs-toggle="#tooltip" data-placement="top" title="" data-bs-original-title="@bob" aria-label="@bob"><i className="fab fa-instagram"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className=" card-profile-div">

                    <h4 className="card-heading"></h4>

                    <div className="modalContainer" style={{ display: 'flex', justifyContent: 'center', marginBottom: '25px', marginTop: '50px', marginLeft: '30px' }}> <Modal /> </div>
                    <div className="card-body">
                      <h4 className="user-bio-pp" style={{ fontWeight: '900', color: '#00308F', fontStyle: 'italic' }}>About Me</h4>
                      <h4 className="user-bio-pp">{bio}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-lg-8" style={{ paddingTop: '58px', marginBottom: '20px' }}>
            <div className="create-p-cont">
              <CreatePost />
            </div>
            <div className="pp-post-cont">
              <Post />

            </div>

          </div>

        </div>
      )}




    </div>

  )

};


export default Profile;