import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css'

export function LeftSideBar() {
    return (
        <div className="left-side-bar">
            <div className="lsb-wrapper">
                <ul className="lsb-list">
                    <li className="lsb-list-item">
                        <i className="fas fa-rss fa-fw"></i>&nbsp;
                        <span className="lsb-list-item-text"><NavLink to="/MainFeed" style={{textDecoration:'none'}}>Feed</NavLink></span>
                    </li>
                    <li className="lsb-list-item">
                        <i className="fas fa-book-open fa-fw"></i>&nbsp;
                        <span className="lsb-list-item-text"><NavLink to="/resources" style={{textDecoration:'none'}}>Resources</NavLink></span>
                    </li>
                    <li className="lsb-list-item">
                        <i className="fas fa-globe fa-fw"></i>&nbsp;
                        <span className="lsb-list-item-text"><NavLink to="/news" style={{textDecoration:'none'}}>News</NavLink></span>
                    </li>
                </ul>
                <hr className="hr"/>
                <ul className="lsb-groups-list">Groups (6)
                    <li className="lsb-group-list-item">
                        <i className="fas fa-dna fa-fw"></i>&nbsp;
                        <span className="lsb-group-list-text"><NavLink to="/categories/biology" style={{textDecoration:'none'}}>Biology</NavLink></span>
                    </li>
                    <li className="lsb-group-list-item">
                        <i className="fas fa-atom fa-fw"></i>&nbsp;
                        <span className="lsb-group-list-text"><NavLink to="/categories/chemistry" style={{textDecoration:'none'}}>Chemistry</NavLink></span>
                    </li>
                    <li className="lsb-group-list-item">
                        <i className="fas fa-laptop fa-fw"></i>&nbsp;
                        <span className="lsb-group-list-text"><NavLink to="/categories/computing" style={{textDecoration:'none'}}>Computing</NavLink></span>
                    </li>
                    <li className="lsb-group-list-item">
                        <i className="fas fa-pen-nib fa-fw"></i>&nbsp;
                        <span className="lsb-group-list-text"><NavLink to="/categories/english" style={{textDecoration:'none'}}>English</NavLink></span>
                    </li>
                    <li className="lsb-group-list-item">
                        <i className="fas fa-calculator fa-fw"></i>&nbsp;
                        <span className="lsb-group-list-text"><NavLink to="/categories/maths" style={{textDecoration:'none'}} >Maths</NavLink></span>
                    </li>
                    <li className="lsb-group-list-item">
                        <i className="fas fa-rocket fa-fw"></i>&nbsp;
                        <span className="lsb-group-list-text" ><NavLink to="/categories/physics" style={{textDecoration:'none'}} >Physics</NavLink></span>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}
