import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import React from 'react';
import Social from '../Social/Social';
import './Header.css';

function Header () {
    return (
        <Paper elevation={0}>
            <Grid id="grid-root" container spacing={3}>
                <Grid item xs={12} md={4}/>
                <Grid item xs={12} md={4}>
                    <Typography id="header-text" component="div">
                        <Box id="name" m={1} letterSpacing={1}> KAMESH DASHORA </Box>
                        <Box id="position" m={1} letterSpacing={1}> LEAD PROGRAMMER ANALYST </Box>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}> <Social/> </Grid>
            </Grid>
        </Paper>
    );
}

export default Header;
