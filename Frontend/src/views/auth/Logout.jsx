import React, { useState, useEffect, Fragment } from 'react';
import './style.css'

const Logout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') == null) {
      window.location.replace('http://localhost:8080/login');
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogout = e => {
    e.preventDefault();

    fetch('https://studenthub-api.herokuapp.com/users/auth/logout/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        localStorage.clear();
        window.location.replace('https://student-hubs.netlify.app/login');
      });
  };

  return (
    <div>
      {loading === false && (
        <Fragment>
          <button id='logout-button' type='button' value='Logout' onClick={handleLogout} >Logout</button>
          {/* <h1>Are you sure you want to logout?</h1> */}
        </Fragment>
      )}
    </div>
  );
};

export default Logout;