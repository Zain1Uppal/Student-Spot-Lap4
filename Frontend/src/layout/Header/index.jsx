import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderSearch } from '../../components/index';
import './style.css';
import   Logout  from '../../views/auth/Logout'

export function Header() {
    return(
        <header>
            <p><i className="fas fa-users"></i>StudentHub</p>
            <HeaderSearch />

            <nav>
                <NavLink className="nav-link" to="/MainFeed">Feed</NavLink>
                <NavLink className="nav-link" to="/Profile">Profile</NavLink>
                <NavLink className="nav-link" to="/Categories">Groups</NavLink>

                <Logout/>

            </nav>
            
        </header>
    )
}