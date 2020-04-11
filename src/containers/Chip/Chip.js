import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import React from 'react';
import { skillData } from '../../data/portfolio';
import './Chip.css';

function ChipComponent () {
    return (
        <Paper id="paper" elevation={0}>
            <Chip id="black-chip" key={11} variant={'outlined'} label={'TOP SKILLS'} />
            {skillData.map(data => (<Grow key={data.key} in timeout={250 * data.key}>
                <Chip label={data.label} id="chip" />
            </Grow>))}
        </Paper>
    );
}

export default ChipComponent;
