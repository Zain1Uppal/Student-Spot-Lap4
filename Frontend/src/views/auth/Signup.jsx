import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
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
      password1: password1,
      password2: password2
    };

    fetch('http://localhost:8000/users/auth/register/', {
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
          setPassword1('');
          setPassword2('');
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
    <div style={{display: 'flex', justifyContent: 'center', fontSize: '45px'}}>
        <div>StudentHub</div>
    </div>
      {loading === false && <div style={{display: 'flex', justifyContent: 'center', fontSize: '20px'}}>Sign Up</div>}
      {errors === true && <h2>Oops! You cannot signup with provided credentials</h2>}
      <div style={{display: 'flex', justifyContent: 'center', fontSize: '20px'}}>
      <form onSubmit={onSubmit}>
        <label htmlFor='email'>Email address:</label> <br />
        <input
          name='email'
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />{' '}
        <br />
        <label htmlFor='password1'>Password:</label> <br />
        <input
          name='password1'
          type='password'
          value={password1}
          onChange={e => setPassword1(e.target.value)}
          required
        />{' '}
        <br />
        <label htmlFor='password2'>Confirm password:</label> <br />
        <input
          name='password2'
          type='password'
          value={password2}
          onChange={e => setPassword2(e.target.value)}
          required
        />{' '}
        <br />
        <input type='submit' value='Signup' />
      </form>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', fontSize: '20px'}}>
        <Link to='/login'><div>Log In</div></Link>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', fontSize: '20px'}}>
        <Link to='/'><div>Home</div></Link>
      </div>
    </div>
  );
};

export default Signup;