import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css'

export function LeftSideBar() {
    return (
        <div className="left-side-bar">
            <div className="lsb-wrapper">
                <ul className="lsb-list">
                    <li className="lsb-list-item">
                        <i className="fas fa-rss"></i>
                        <span className="lsb-list-item-text"><NavLink to="/MainFeed">Feed</NavLink></span>
                    </li>
                    <li className="lsb-list-item">
                        <i className="fas fa-book-open"></i>
                        <span className="lsb-list-item-text"><NavLink to="/resources">Resources</NavLink></span>
                    </li>
                    <li className="lsb-list-item">
                        <i className="fas fa-globe"></i>
                        <span className="lsb-list-item-text"><NavLink to="/news">News</NavLink></span>
                    </li>
                </ul>
                <hr className="hr"/>
                <ul className="lsb-groups-list">Groups (6)
                    <li className="lsb-group-list-item">
                        <i className="fas fa-dna"></i>
                        <span className="lsb-group-list-text"><NavLink to="/biology">Biology</NavLink></span>
                    </li>
                    <li className="lsb-group-list-item">
                        <i className="fas fa-atom"></i>
                        <span className="lsb-group-list-text"><NavLink to="/chemistry">Chemistry</NavLink></span>
                    </li>
                    <li className="lsb-group-list-item">
                        <i className="fas fa-laptop"></i>
                        <span className="lsb-group-list-text"><NavLink to="/computing">Computing</NavLink></span>
                    </li>
                    <li className="lsb-group-list-item">
                        <i className="fas fa-pen-nib"></i>
                        <span className="lsb-group-list-text"><NavLink to="/english">English</NavLink></span>
                    </li>
                    <li className="lsb-group-list-item">
                        <i className="fas fa-calculator"></i>
                        <span className="lsb-group-list-text"><NavLink to="/maths">Maths</NavLink></span>
                    </li>
                    <li className="lsb-group-list-item">
                        <i className="fas fa-rocket"></i>
                        <span className="lsb-group-list-text"><NavLink to="/physics">Physics</NavLink></span>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}
