import Fab from '@material-ui/core/Fab';
import Grow from '@material-ui/core/Grow';
import React from 'react';
import { personalInfo } from '../../data/portfolio';
import './FabButton.css';

function FabButton () {
    return (
        <Grow in timeout={1000}>
            <Fab variant="extended" href={'mailto:' + personalInfo.email}
                size="medium" color="primary" aria-label="add" className="fab">
                CONNECT
            </Fab>
        </Grow>
    );
}

export default FabButton;
