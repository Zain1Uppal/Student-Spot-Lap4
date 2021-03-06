import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CreatePost, Post } from '../../components/index';
import { Header } from '../../layout/index';
import { ButtonToolbar } from 'react-bootstrap';
import * as urls from '../../Urls'
// import '@popperjs/core';
// import {default as email} from '../../views/auth/Signup';
export const UserPage = ({ match, location }) => {

  const [firstName, setFirstName] = useState('');
  const [userName, setUsername] = useState('');
  const [university, setUniversity] = useState('')
  const [course, setCourse] = useState('')
  const [bio, setBio] = useState('')
  const [place, setPlace] = useState('')
  const [followers, setFollowers] = useState('')
  const [followed, setFollowed] = useState(false)
  const [followArr, setFollowArr] = useState()


  const [loading, setLoading] = useState(true);
  let params = useParams()
  let username = params.username
  let loggedUser = localStorage.getItem('userName')


  useEffect(() => {
    if (!localStorage.getItem('token')) {
      window.location.replace(`${urls.origin}/login`);
    } else {
      fetch(`${urls.api}/users/${username}`, {
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
          if (data.detail == 'Not Found.') {

            <h1>user not found search for different user</h1>
          } else {
            setFirstName(data.data.first_name);
            setBio(data.data.bio);
            setCourse(data.data.course);
            setUniversity(data.data.university);
            setPlace(data.data.location);
            setUsername(data.data.username);
            setFollowers(data.data.followers.length)
            // setUniCourse(data.uni_course);
            setLoading(true);

            data.data.followers.forEach((i) => {
              if (i == loggedUser) {
                setFollowed(true)
              } else {
                setFollowed(false)
              }
            })

            setLoading(false);
          }
        }
        )
    }
  }, []);


  let followingUser = null



  function onFollow() {
    if (followed) {
      followingUser = {
        unfollow_user: username
      }
    } else {
      followingUser = {
        follow_user: username
      }
    }
    fetch(`${urls.api}/users/${loggedUser}/following`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(followingUser)
    }).then(res => res.json())
      .then(data => setFollowed((prevState) => !prevState))

  }


  return (
    <div className="pp-head">

      <Header />

      {loading === false && (

        <div className="page-holder">
          <div className="col-lg-4">
            <div className="">

              <h1 className="page-heading1" style={{ marginLeft: '100px' }}>{userName}'s Profile</h1>

            </div>
            <section>
              <div className="row">
                <div className="col-lg-41" style={{ marginLeft: '100px' }}>
                  <div className="card1 card-profile1">
                    <div className="card-header" style={{ backgroundImage: "url(https://i.pinimg.com/originals/42/4a/7f/424a7fcccbf967b8e54cc1536f155dc6.jpg)" }}> </div>
                    <div className="card-body1 text-center"> <img className="card-profile-img" src="https://lh3.googleusercontent.com/WOca4Iwh_d5fQ1uoIbLatcQ8H-CTtdRfIFp4IXrmUpFFDlYhf09bzqxCD26hXmKUszlP0N0CDgTe0pHhbzbkpKeRPg=w600" alt="profile img" />
                      <h3 className="mb-3">{userName}</h3>
                      <p className="mb-4" style={{ fontWeight: 'bold', color: '#00308F', fontStyle: 'italic' }}>{course}</p>
                      <p className="mb-4">{university}</p>




                      <p className="followers-pp">Followers:{followers}</p>
                      <i className="fas fa-map-marker-alt fa-fw"></i>&nbsp;<span className="ml-1">{place}</span>
                      <div className="btn-toolbar">
                        <button className="btn btn-outline-secondary" type="button" style={{ margin: '10px' }}><i className="fa fa-paper-plane"></i> Message</button>
                        {followed ?
                          <button className="btn btn-outline-dark" style={{ marginLeft: '10px', marginRight: '10px' }} onClick={onFollow}><i className="fas fa-minus"></i>unFollow</button> :
                          <button className="btn btn-outline-dark" style={{ marginLeft: '10px', marginRight: '10px' }} onClick={onFollow}><i className="fas fa-plus"></i>Follow</button>
                        }

                        <div className="flex-grow-1 ps-3" style={{ marginTop: '10px' }}>
                        </div>
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
                    <div className="card-body2">
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


export default UserPage;

