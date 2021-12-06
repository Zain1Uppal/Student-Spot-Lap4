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
      <ul style={{padding:'0'}}>
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
            {/* style={{display: 'flex', justifyContent: 'center'}} */}
            <div className="button-box col-lg-12" style={{textAlign: 'center', marginTop: '20px'}}>
            <Link to='/login'> <button type="button" className="btn btn-secondary btn-lg btn-block" style={{padding:'10px', margin:'10px'}}>Log In</button></Link>
            <Link to='/signup'><button type="button" className="btn btn-primary btn-lg btn-block" style={{padding:'10px', margin:'10px'}}>Sign Up</button></Link>
            </div>
        
          </Fragment>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;