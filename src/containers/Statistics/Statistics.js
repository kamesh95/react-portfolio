import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { statisticsData } from '../../data/portfolio';
import './Statistics.css';

function Statistics () {
    return (
        statisticsData.map(o => {
            return (
                <Grid key={o.key} item md={3} xs={12}>
                    <Grow in timeout={500 * o.key}>
                        <Paper id="statistics-paper" elevation={0}>
                            <Typography component="div" id="statistics-text">
                                <Box id="statistics-value-box" m={1}> {o.value} </Box>
                                <Box id="statistics-label-box" letterSpacing={1}> {o.label} </Box>
                            </Typography>
                        </Paper>
                    </Grow>
                </Grid>
            );
        })
    );
}

export default Statistics;
