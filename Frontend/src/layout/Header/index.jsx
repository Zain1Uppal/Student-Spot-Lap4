import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderSearch } from '../../components/index';
import './style.css';

export function Header() {
    return(
        <header>
            <p><i class="fas fa-users"></i>StudentHub</p>
            <HeaderSearch />

            <nav>
                <NavLink className="nav-link" to="/MainFeed">Feed</NavLink>
                <NavLink className="nav-link" to="/Profile">Profile</NavLink>
                <NavLink className="nav-link" to="/Categories">Groups</NavLink>

                <button>Log out</button>

            </nav>
            
        </header>
    )
}