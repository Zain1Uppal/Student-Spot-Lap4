import React, { useState } from 'react';
import './style.css';
import * as urls from '../../Urls'

export const HeaderSearch = () => {
    const [search, setSearch] = useState()
    function searchForUser() {
        window.location.replace(`${urls.origin}/users/${search}`)
    }
    return (
        <>
            <div className="wrapper">
                <div className="search-input">
                    <a href="" target="_blank" hidden></a>
                    <input type="text" placeholder="Search a user" onChange={e => setSearch(e.target.value)} ></input>
                    <div className="icon"><button type='submit' className="fas fa-search" onClick={searchForUser}></button></div>
                    <div className="autocom-box"></div>
                </div>
            </div>
        </>
    )
}