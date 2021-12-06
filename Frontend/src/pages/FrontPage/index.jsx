import React from 'react';
import './style.css';
import logo from '../../img/logo.png'

export function FrontPage() {

    return(
        <>
         <div style={{display: 'flex', justifyContent: 'center', fontSize: '45px', marginTop: '150px'}}>
        <img style={{height: '100px', width: '120px'}}src={logo} />
        </div>
        <div style={{display: 'flex', justifyContent: 'center', fontSize: '45px', color: 'white'}}>
            <div>StudentHub</div>
        </div>
        </>
        
    )
}