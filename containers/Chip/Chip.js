import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import './Chip.css';
import '../App/App.css';

function ChipComponent () {
    const chipData = [
        { key: 1, label: 'Microservices' },
        { key: 2, label: 'AngularJS' },
        { key: 3, label: 'MS Azure' },
        { key: 4, label: 'MS SQL' },
        { key: 5, label: 'Node.js' },
        { key: 6, label: 'Mocha' },
        { key: 7, label: 'React' },
        { key: 8, label: 'xUnit' },
        { key: 9, label: 'Jest' },
        { key: 10, label: 'C#' }
    ];

    return (
        <Paper className="root" elevation={0}>
            <Chip id="black-chip" key={11} variant={'outlined'} label={'TOP SKILLS'} />
            {chipData.map(data => <Chip key={data.key} label={data.label} id="chip" />)}
        </Paper>
    );
}

export default ChipComponent;
