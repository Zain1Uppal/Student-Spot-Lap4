import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as urls from '../../Urls'

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      window.location.replace(`${urls.origin}/mainfeed`);
    } else {
      setLoading(false);
    }
  }, []);

  const onSubmit = e => {
    e.preventDefault();

    const user = {
      username: username,
      password1: password1,
      password2: password2
    };

    fetch(`${urls.api}/users/auth/register/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => {
        window.location.replace(`${urls.origin}/login`);
        res.json()
      })
    // .then(data => {
    //   if (data.key) {
    //       localStorage.clear();
    //       localStorage.setItem('token', data.key);
    //     } else {
    //         setEmail('');
    //         setPassword1('');
    //         setPassword2('');
    //         localStorage.clear();
    //         setErrors(true);
    //       }
    //     });
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', fontSize: '45px', marginTop: '220px' }}>
        <i className="fas fa-users" style={{ color: 'white', fontSize: '60px' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', fontSize: '45px', color: 'white' }}>
        <div>StudentHub</div>
      </div>
      {loading === false && <div style={{ display: 'flex', justifyContent: 'center', fontSize: '20px', color: 'white', margin: '10px' }}>Sign Up</div>}
      {errors === true && <h2 style={{ textAlign: 'center', color: 'white' }}>Oops! You cannot signup with provided credentials.</h2>}
      <div style={{ display: 'flex', justifyContent: 'center', fontSize: '20px', color: 'white' }}>
        <form onSubmit={onSubmit}>
          <label htmlFor='username'>Username:</label> <br />
          <input
            name='username'
            type='text'
            value={username}
            placeholder={'Enter username'}
            style={{ color: 'black' }}
            onChange={e => setUsername(e.target.value)}
            required
          />{' '}
          <br />
          <label htmlFor='password1'>Password:</label> <br />
          <input
            name='password1'
            type='password'
            value={password1}
            placeholder={'Enter password'}
            style={{ color: 'black' }}
            onChange={e => setPassword1(e.target.value)}
            required
            autoComplete="on"
            minLength='8'
          />{' '}
          <br />
          <label htmlFor='password2'>Confirm password:</label> <br />
          <input
            name='password2'
            type='password'
            value={password2}
            placeholder={'Re-enter password'}
            style={{ color: 'black' }}
            onChange={e => setPassword2(e.target.value)}
            required
            autoComplete="on"
          />{' '}
          <br />
          <div style={{ display: 'flex', justifyContent: 'center', fontSize: '20px', margin: '10px' }}>
            <input className="btn btn-primary" style={{ margin: '10px' }} type="submit" value='Sign Up' />
            <Link to='/login' className="btn btn-secondary" id="logInLink" style={{ margin: '10px', height: 'auto', width: 'auto', textDecoration: 'none !important', fontSize: '1.5rem' }}><div>Log In</div></Link>
          </div>
        </form>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', fontSize: '20px', height: 'auto', width: 'auto', textDecoration: 'none', margin: '10px', }}>
        <Link to='/' input className="btn btn-dark" id="homeButton" ><div>Home</div></Link>
      </div>
    </div>
  );
};

export default Signup;