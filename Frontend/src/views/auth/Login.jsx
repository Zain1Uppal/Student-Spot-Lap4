import React, { useState, useEffect } from 'react';
import { BackButton } from '../../components';
import logo from '../../img/logo.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      window.location.replace('http://localhost:8080/dashboard');
    } else {
      setLoading(false);
    }
  }, []);

  const onSubmit = e => {
    e.preventDefault();

    const user = {
      email: email,
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
          window.location.replace('http://localhost:8080/dashboard');
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
      {loading === false && <div style={{display: 'flex', justifyContent: 'center', fontSize: '20px'}}>Login</div>}
      {errors === true && <h2>Oops! There are some issues logging in with provided credentials</h2>}
      {loading === false && (
        <div style={{display: 'flex', justifyContent: 'center', fontSize: '20px'}}>
        <form onSubmit={onSubmit}>
          <label htmlFor='email'>Email address:</label> <br />
          <input
            name='email'
            type='email'
            value={email}
            required
            onChange={e => setEmail(e.target.value)}
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
          <div class="button-box col-lg-12" style={{textAlign: 'center', marginTop: '20px'}}>
          <input class="btn btn-primary" type="submit" value="Log In" style={{padding:'10px', margin:'10px'}} />
          <BackButton className="backButton" />
  
          </div>
        </form>
        </div>   
      )}
      
      
    </div>
  );
};

export default Login;