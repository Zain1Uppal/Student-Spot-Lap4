import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HeaderSearch } from '../../components/index';
import './style.css';
import Logout from '../../views/auth/Logout';

export function Header() {
    return (
        <header>
            <a className="logoLink" href="/MainFeed"><p><i className="fas fa-users"></i>StudentHub</p></a>
            <HeaderSearch />

            <nav>
                <NavLink className="nav-link" to="/mainfeed">Feed</NavLink>
                <NavLink className="nav-link" to="/profile">Profile</NavLink>
                {/* <NavLink className="nav-link" to="/Categories">Groups</NavLink> */}

                <Logout />

            </nav>

        </header>
    )
}