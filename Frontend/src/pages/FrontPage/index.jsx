import React from 'react';
import './style.css';


export function FrontPage() {

    return(
        <>
         <div style={{display: 'flex', justifyContent: 'center', fontSize: '100px', marginTop: '150px'}}>
         <i className="fas fa-users" style={{color:'white', fontSize:'60px'}}/>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', fontSize: '45px', color: 'white'}}>
            <div>StudentHub</div>
        </div>
        </>
        
        
    )
}