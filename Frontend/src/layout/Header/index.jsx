import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

export function Header() {
    return(
        <header>
            <p class="logo-nav">LOGO</p>

            <nav>
                <NavLink class="nav-link" to="/MainFeed">Feed</NavLink>
                <NavLink class="nav-link" to="/Profile">Profile</NavLink>
                <NavLink class="nav-link" to="/Categories">Groups</NavLink>

                <button>Log out</button>

            </nav>
            
        </header>
    )
}