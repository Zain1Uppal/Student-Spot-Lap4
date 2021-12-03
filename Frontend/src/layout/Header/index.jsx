import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

export function Header() {
    return(
        <>
            
            <nav>
                <p>LOGO (ptag for now)</p>
                <NavLink exact to="/">Front</NavLink>
                <NavLink to="/MainFeed">Feed</NavLink>
                <NavLink to="/Profile">Profile</NavLink>
                <NavLink to="/Categories">Groups</NavLink>

            </nav>
            
        </>
    )
}