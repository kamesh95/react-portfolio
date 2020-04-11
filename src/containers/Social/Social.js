import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import CardMedia from '@material-ui/core/CardMedia';
import React from 'react';
import { socialData } from '../../data/portfolio';
import './Social.css';

function Social () {
    return (
        <Grid id="grid" container spacing={3}>
            {socialData.map(o => {
                return (
                    <Grid key={o.key} item>
                        <Grow in timeout={500 * o.key}>
                            <CardMedia id="media"
                                onClick={() => window.open(o.link)} title={o.altText} image={o.image}/>
                        </Grow>
                    </Grid>
                );
            })}
        </Grid>
    );
}

export default Social;
