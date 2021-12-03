import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      setIsAuth(true);
    }
  }, []);

  return (
    <nav>
      <ul>
        {isAuth === true ? (
          <Fragment>
            {' '}
            <li>
              <Link to='/dashboard'>Dashboard</Link>
            </li>
            <li>
              <Link to='/logout'>Logout</Link>
            </li>
          </Fragment>
        ) : (
          <Fragment>
            {' '}
            <div style={{display: 'flex', justifyContent: 'center', fontSize: '20px'}}>
            <Link to='/login'><div>Log In</div></Link>
            </div>

            <div style={{display: 'flex', justifyContent: 'center', fontSize: '20px'}}>
            <Link to='/signup'><div>Sign Up</div></Link>
            </div>
          </Fragment>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;