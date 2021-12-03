import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

export function Header() {
    return(
        <header>
            <p className="logo-nav">LOGO</p>

            <nav>
                <NavLink className="nav-link" to="/MainFeed">Feed</NavLink>
                <NavLink className="nav-link" to="/Profile">Profile</NavLink>
                <NavLink className="nav-link" to="/Categories">Groups</NavLink>

                <button>Log out</button>

            </nav>
            
        </header>
    )
}