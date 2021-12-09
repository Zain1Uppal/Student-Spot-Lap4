import React from 'react';
import { useHistory } from 'react-router-dom';

export const BackButton = () => {
    const history = useHistory();

    return <button className="btn btn-secondary" id="back-button" style={{padding:'10px', margin:'10px', fontSize:'1.5rem'}} onClick={history.goBack}>Back</button>
}

