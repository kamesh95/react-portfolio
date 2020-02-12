import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import React from 'react';
import './ProfilePicture.css';

function ProfilePicture () {
    return (
        <Box id="container-box" m={1}>
            <CardMedia id="profile-image" image="IMG_3763.JPG"/>
        </Box>
    );
}

export default ProfilePicture;
