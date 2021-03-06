import React, { useState, useEffect } from 'react';
import { Header } from '../../layout/index';
import { Feed, LeftSideBar, RightSideBar } from '../../components/index'
import './style.css';
import { Profile } from '../Profile/index'
import * as urls from '../../Urls'

export function MainFeed() {
  const [userEmail, setUserEmail] = useState('');
  const [userId, setUserId] = useState()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      window.location.replace(`${urls.origin}/login`);
    } else {
      fetch(`${urls.api}/users/auth/user/`, {
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
            window.location.replace(`${urls.origin}/login`);
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