import Fab from '@material-ui/core/Fab';
import React from 'react';
import './FabButton.css';

function FabButton () {
    return (
        <Fab variant="extended" size="medium" color="primary" aria-label="add" className="fab">
            CONNECT
        </Fab>
    );
}

export default FabButton;
