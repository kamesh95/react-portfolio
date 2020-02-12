import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import React from 'react';
import './Social.css';

function Social () {
    const data = [
        { key: 1, image: 'so-icon.png' },
        { key: 2, image: 'insta-logo.png' },
        { key: 3, image: 'Octocat.png' }
    ];

    return (
        <Grid id="grid" container spacing={3}>
            {data.map(o => {
                return (
                    <Grid key={o.key} item>
                        <CardMedia id="media" image={o.image}/>
                    </Grid>
                );
            })}
        </Grid>
    );
}

export default Social;
