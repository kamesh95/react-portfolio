import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import { summaryData } from '../../data/portfolio';
import './Summary.css';

function Summary () {
    return (
        summaryData.map(o => {
            return (
                <Grid key={o.key} item md={6} xs={12}>
                    <Paper elevation={0}>
                        <Typography id="summary-text" component="div">
                            <Box textAlign="justify" fontSize="fontSize" m={1}> {o.text} </Box>
                        </Typography>
                    </Paper>
                </Grid>
            );
        })
    );
}

export default Summary;
