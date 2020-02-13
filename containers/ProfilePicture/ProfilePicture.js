import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import React from 'react';
import './ProfilePicture.css';
import * as profilepicture from '../../public/IMG_3763.JPG';

function ProfilePicture () {
    return (
        <Box id="container-box" m={1}>
            <CardMedia id="profile-image" image={profilepicture.default}/>
        </Box>
    );
}

export default ProfilePicture;
