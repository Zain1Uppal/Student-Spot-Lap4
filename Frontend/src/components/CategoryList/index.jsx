import React from 'react';
import './style.css'

export const CategoryList = ({icon, groupname}) => {

    return (
        <div className="group-container">
            <div  className="group-row">
                <img className="group-img"src={icon} alt="group-icon"/>
                <h1 className="group-name">{groupname}</h1>
                <button className="cate-btn">Learn More</button>
            </div>
          
        </div>
        
    
    )
}


