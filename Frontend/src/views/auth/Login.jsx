import React, { useState, useEffect } from 'react';
import { BackButton } from '../../components';
import { Redirect } from 'react-router-dom';
import { MainFeed } from '../../pages';
import logo from '../../img/logo.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      window.location.replace('http://localhost:8080/MainFeed');
    } else {
      setLoading(false);
    }
  }, [localStorage.getItem('token')]);

  const onSubmit = e => {
    e.preventDefault();

    const user = {
      username: username,
      password: password
    };

    fetch('http://localhost:8000/users/auth/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.key) {
          localStorage.clear();
          localStorage.setItem('token', data.key);
          localStorage.setItem('userName', username)
          window.location.replace('http://localhost:8080/login');
          // return <Redirect to= '/dashboard'  />
        } else {
          setEmail('');
          setPassword('');
          localStorage.clear();
          setErrors(true);
        }
      });
  };

  return (
      
    <div>
    <div style={{display: 'flex', justifyContent: 'center', fontSize: '45px', marginTop: '150px'}}>
    <img style={{height: '100px', width: '120px'}}src={logo} />
    </div>
    <div style={{display: 'flex', justifyContent: 'center', fontSize: '45px', color: 'white'}}>
        <div>StudentHub</div>
    </div>
      {loading === false && <div style={{display: 'flex', justifyContent: 'center', fontSize: '20px', color: 'white', margin: '10px'}}>Login</div>}
      {errors === true && <h2>Oops! There are some issues logging in with provided credentials</h2>}
      {loading === false && (
        <div style={{display: 'flex', justifyContent: 'center', fontSize: '20px', color: 'white'}}>
        <form onSubmit={onSubmit}>
          <label htmlFor='username'>username:</label> <br />
          <input
            name='username'
            type='text'
            value={username}
            required
            onChange={e => setUsername(e.target.value)}
          />{' '}
          <br />
          <label htmlFor='password'>Password:</label> <br />
          <input
            name='password'
            type='password'
            value={password}
            required
            onChange={e => setPassword(e.target.value)}
          />{' '}
          <br />
          <div className="button-box col-lg-12" style={{textAlign: 'center', marginTop: '20px'}}>
          <input className="btn btn-primary" type="submit" value="Log In" style={{padding:'10px', margin:'10px'}} />
          <BackButton className="backButton" />
  
          </div>
        </form>
        </div>   
      )}
      
      
    </div>
  );
};

export default Login;