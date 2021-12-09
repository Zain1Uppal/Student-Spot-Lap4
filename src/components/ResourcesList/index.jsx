import React from 'react';
import './style.css';

export const ResourcesList = ({ name, author, year, url, subject }) => {



    return(
        <div className="res-cont">
            <div className="res-row">
                <div className="res-book">
                    <h1 className="res-title">{name}</h1>
                    <p className="res-author">{author}</p>
                    <p className="res-year">{year}</p>
                    <p className="res-subject">{subject}</p>
                    <a className="res-link" href={url}>More Info</a>
                    
                </div>
            </div>
        </div>
    )

}
