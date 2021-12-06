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
                        <span className="lsb-list-item-text">News</span>
                    </li>
                </ul>
                <hr className="hr"/>
                <ul className="lsb-groups-list">Groups (6)
                    <li className="lsb-group-list-item">
                        <i className="fas fa-laptop"></i>
                        <span className="lsb-group-list-text">Computing</span>
                    </li>
                    <li className="lsb-group-list-item">
                        <i className="fas fa-rocket"></i>
                        <span className="lsb-group-list-text">Physics</span>
                    </li>
                    <li className="lsb-group-list-item">
                    <i className="fas fa-atom"></i>
                        <span className="lsb-group-list-text">Chemistry</span>
                    </li>
                    <li className="lsb-group-list-item">
                        <i className="fas fa-dna"></i>
                        <span className="lsb-group-list-text">Biology</span>
                    </li>
                    <li className="lsb-group-list-item">
                        <i className="fas fa-calculator"></i>
                        <span className="lsb-group-list-text">Maths</span>
                    </li>
                    <li className="lsb-group-list-item">
                        <i className="fas fa-pen-nib"></i>
                        <span className="lsb-group-list-text">English</span>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}
