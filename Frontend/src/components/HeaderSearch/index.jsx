import React from 'react';
import './style.css';


export const HeaderSearch = (data) => {

    return(
        <>
            <div class="wrapper">
                <div class="search-input">
                  <a href="" target="_blank" hidden></a>
                  <input type="text" placeholder="Search a user"></input>
                  <div class="autocom-box"></div>
                  <div class="icon"><i class="fas fa-search"></i></div>
                </div>
            </div>
        </>
    )
}