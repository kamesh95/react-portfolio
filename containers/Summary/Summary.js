import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import './Summary.css';

function Summary () {
    const data = [
        {
            key: 1, text: `Full Stack Developer with 3+ yrs of experience on developing front-end,
                back-end and heavy database solutions with CI/CD in an Agile environment. Passionate
                about developing scalable solutions and learning new technologies. Also, focused on
                maintaining code quality and security aspect of the web application to minimize loopholes
                and deliver a stable and secure application. I am pretty good with Debugging and making
                hot-fixes for production in quick time.`
        },
        {
            key: 2, text: `Full Stack Developer with 3+ yrs of experience on developing front-end,
                back-end and heavy database solutions with CI/CD in an Agile environment. Passionate
                about developing scalable solutions and learning new technologies. Also, focused on
                maintaining code quality and security aspect of the web application to minimize loopholes
                and deliver a stable and secure application. I am pretty good with Debugging and making
                hot-fixes for production in quick time.`
        }
    ];
    return (
        data.map(o => {
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
