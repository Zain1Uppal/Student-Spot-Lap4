import React, { useState, useEffect } from 'react';
import { Header } from '../../layout/index';
import { Feed, LeftSideBar, RightSideBar } from '../../components/index'
import './style.css';
import { Profile } from '../Profile/index'

export function MainFeed() {
  const [userEmail, setUserEmail] = useState('');
  const [userId, setUserId] = useState()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      window.location.replace('http://localhost:8080/login');
    } else {
      fetch('https://studenthub-api.herokuapp.com/users/auth/user/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem('token')}`
        }
      })
        .then(res => {
          if (res.status === 200) {
            return res.json()
          } else {
            localStorage.clear()
            window.location.replace('http://localhost:8080/login');
          }
        })
        .then(data => {
          setUserEmail(data.email);
          setUserId(data.pk)
          setLoading(false);
        });
    }
  }, []);

  return (
    <div>
      {loading === false && (
        <main>
          <Header />
          <div className="content">
            <LeftSideBar />
            <Feed userId={userId} />
            <RightSideBar />
          </div>
        </main>
      )}
    </div>
  )
}