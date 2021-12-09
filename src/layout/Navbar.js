// import { auto } from '@popperjs/core';
import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isAuth, setIsAuth] = useState(false);

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
        console.log(data);
        localStorage.clear();
        window.location.replace('http://localhost:8080/login');
      });
  };

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      setIsAuth(true);
    }
  }, []);

  return (
    <nav>
      <ul style={{padding:'0'}}>
        {isAuth === true ? (
          <Fragment>
            {' '}
            
            <div style={{display: 'flex', justifyContent: 'center', fontSize: '20px', height: 'auto', width:'auto', textDecoration: 'none', margin: '10px',}}>
            <Link to='/MainFeed' input className="btn btn-dark" id="mainPageButton" ><div>Home</div></Link>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', fontSize: '20px', height: 'auto', width:'auto', textDecoration: 'none', margin: '10px',}}>
            <Link to='/logout' input className="btn btn-secondary" id="logOutButton" onClick={handleLogout}><div>Log Out</div></Link>
            </div>
           
            
            
          </Fragment>
        ) : (
          <Fragment>
            {' '}
            {/* style={{display: 'flex', justifyContent: 'center'}} */}
            <div className="button-box col-lg-12" style={{textAlign: 'center', marginTop: '20px'}}>
          <Link to='/login'> <button type="button" className="btn btn-secondary btn-lg btn-block" id='loginButton' style={{padding:'10px', margin:'10px', height: 'auto', width: 'auto' }}>Log In</button></Link>
            <Link to='/signup'><button type="button" className="btn btn-primary btn-lg btn-block" id='signUpButton' style={{padding:'10px', margin:'10px', height: 'auto', width: 'auto' }}>Sign Up</button></Link>
            </div>
        
          </Fragment>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
