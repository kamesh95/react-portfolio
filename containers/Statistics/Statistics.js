import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import './Statistics.css';

function Statistics () {
    const data = [
        { key: 1, label: 'STACK OVERFLOW REACH', value: '31k+' },
        { key: 2, label: 'YEARS OF EXPERIENCE', value: '3+' },
        { key: 3, label: 'WORK ITEMS COMPLETED', value: '600+' },
        { key: 4, label: 'PROGRAMMING LANGUAGES', value: '5' }
    ];

    return (
        data.map(o => {
            return (
                <Grid key={o.key} item md={3} xs={12}>
                    <Paper id="statistics-paper" elevation={0}>
                        <Typography component="div" id="statistics-text">
                            <Box id="statistics-value-box" m={1}> {o.value} </Box>
                            <Box id="statistics-label-box" letterSpacing={1}> {o.label} </Box>
                        </Typography>
                    </Paper>
                </Grid>
            );
        })
    );
}

export default Statistics;
