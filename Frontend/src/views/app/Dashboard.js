import React, { useState, useEffect, Fragment } from 'react';
import * as urls from '../../Urls'

export const Dashboard = () => {
  const [userName, setUserName] = useState('');
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
          setUserName(data.username);
          setLoading(false);
        });
    }
  }, []);

  return (
    <div>
      {loading === false && (
        <Fragment>
          <h1>Dashboard</h1>
          <h2>Hello {userName}!</h2>
        </Fragment>
      )}
    </div>
  );
};