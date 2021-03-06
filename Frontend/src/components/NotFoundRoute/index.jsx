import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../../img/404.png'


class NotFoundPage extends React.Component {
    render() {
        return <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={PageNotFound} />
            </div>
            <h1 style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>This page does not exist.</h1>
            <p style={{ textAlign: "center" }}>
                <Link to='/mainfeed' input="true" className="btn btn-dark" id="homeButton" >Home</Link>
            </p>
        </div>;
    }
}
export default NotFoundPage;