import React from 'react';
import { useHistory } from 'react-router-dom';

export const BackButton = () => {
    const history = useHistory();

    return <button class="btn btn-secondary" id="back-button" style={{padding:'10px', margin:'10px'}} onClick={history.goBack}>Back</button>
}

