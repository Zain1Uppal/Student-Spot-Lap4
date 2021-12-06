import React, { useState, useEffect, Fragment } from 'react';

export const Dashboard = () => {
  const [userEmail, setUserEmail] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('before if dashboard')
    if (!localStorage.getItem('token')) {
      console.log('inside first condition')
      window.location.replace('http://localhost:8080/login');
    } else {
      console.log('inside second condition')
      fetch('http://localhost:8000/users/auth/user/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem('token')}`
        }
      })
        .then(res => {if(res.status === 200){
                        return res.json()
                      }else{
                        localStorage.clear()
                        window.location.replace('http://localhost:8080/login');
                      }
                    })
        .then(data => {
          setUserEmail(data.email);
          setLoading(false);
        });
    }
  }, []);

  return (
    <div>
      {loading === false && (  
        <Fragment>
          <h1>Dashboard</h1>
          <h2>Hello {userEmail}!</h2>
        </Fragment>
      )}
    </div>
  );
};