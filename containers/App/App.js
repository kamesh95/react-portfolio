import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import ChipComponent from '../Chip/Chip';
import FabButton from '../FabButton/FabButton';
import Statistics from '../Statistics/Statistics';
import Header from '../Header/Header';
import Summary from '../Summary/Summary';
import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
    render () {
        return (
            <div className="App">
                <Grid id="root-grid" container spacing={0} alignItems="center" justify="center">
                    <ProfilePicture/>
                    <Card id="card" elevation={4} variant="elevation">
                        <CardContent>
                            <Header/>
                            <Grid container spacing={3} >
                                <Statistics/>
                                <ChipComponent/>
                                <Summary/>
                            </Grid>
                        </CardContent>
                        <CardActions id="card-actions">
                            <FabButton/>
                        </CardActions>
                    </Card>
                </Grid>
            </div>
        );
    }
}
