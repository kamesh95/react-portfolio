import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import React from 'react';
import './Social.css';
import * as soicon from '../../public/so-icon.png';
import * as linkedin from '../../public/linkedin.png';
import * as octocat from '../../public/Octocat.png';

function Social () {
    const data = [
        { key: 1, image: soicon.default },
        { key: 2, image: linkedin.default },
        { key: 3, image: octocat.default }
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
