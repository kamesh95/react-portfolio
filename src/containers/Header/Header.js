import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import React from 'react';
import { personalInfo } from '../../data/portfolio';
import Social from '../Social/Social';
import './Header.css';

function Header () {
    return (
        <Paper elevation={0}>
            <Grid id="grid-root" container spacing={3}>
                <Grid item xs={12} md={4}/>
                <Grid item xs={12} md={4}>
                    <Grow in timeout={500}>
                        <Typography id="header-text" component="div">
                            <Box id="name" m={1} letterSpacing={1}> { personalInfo.name } </Box>
                            <Box id="position" m={1} letterSpacing={1}> { personalInfo.designation } </Box>
                        </Typography>
                    </Grow>
                </Grid>
                <Grid item xs={12} md={4}> <Social/> </Grid>
            </Grid>
        </Paper>
    );
}

export default Header;
