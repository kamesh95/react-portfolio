import React, { Component } from 'react';
import './App.css';
import SimpleCard from '../Card/Card';

export default class App extends Component {
    render () {
        return (<div className="App">
            <SimpleCard/>
        </div>);
    }
}
