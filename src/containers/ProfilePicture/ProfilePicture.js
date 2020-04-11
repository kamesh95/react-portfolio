import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import Grow from '@material-ui/core/Grow';
import React from 'react';
import { profilePicture } from '../../data/portfolio';
import './ProfilePicture.css';

function ProfilePicture () {
    return (
        <Grow in timeout={1000}>
            <Box id="container-box" m={1}>
                <CardMedia id="profile-image" image={profilePicture.default}/>
            </Box>
        </Grow>
    );
}

export default ProfilePicture;
