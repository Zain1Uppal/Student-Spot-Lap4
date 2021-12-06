import React from 'react';
import './style.css';

export const ResourcesList = ({ title, author, year, link, subject }) => {



    return(
        <div className="res-cont">
            <div className="res-row">
                <div className="res-book">
                    <h1 className="res-title">{title}</h1>
                    <p className="res-author">{author}</p>
                    <p className="res-year">{year}</p>
                    <p className="res-subject">{subject}</p>
                    <a className="res-link" href={link}>More Info</a>
                    
                </div>
            </div>
        </div>
    )

}
