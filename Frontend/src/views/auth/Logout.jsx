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

    fetch('http://localhost:8000/users/auth/logout/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${localStorage.getItem('token')}`
      }
    })
      .then(res => {if(res.status === 500){
                        window.location.replace('http://localhost:8080/login')
                        return res.json()
      }})
      .then(data => {
        console.log(data);
        localStorage.clear();;
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