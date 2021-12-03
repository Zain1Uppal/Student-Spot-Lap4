import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap'
import './style.css'

export const CategoryList = ({icon, groupname}) => {

    return (
        <div className="group-container">
            <Card style={{ width: '18rem', height: '10rem' }}>
                <Card.Img className="group-img"src={icon} alt="group-icon"/>
                <Card.Text className="group-name">{groupname}</Card.Text>
                <button>Learn More</button>
            </Card>
        </div>
        
        // <div className="group-container">
        //     <div className="group-row">
        //         <div className="group">
        //             <img src={icon} alt="group-icon" className="group-img"/>
        //             <h1 className="group-name">{groupname}</h1>
        //         </div>
        //     </div>

        // </div>
    )
}


