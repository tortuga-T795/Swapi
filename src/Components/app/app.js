import React, {Component} from 'react';
import './app.css';
import Header from "../app-header/header";
import RandomPlanet from "../random-planet/random-planet";
import ErrorButton from "../error-button/error-button";
import ErrorIndicator from "../error-indicator/error-indicator";
import PeoplePage from "../people-page/people-page";

export default class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            showRandomPlanet: true,
            hasError: false
        };
    }

    componentDidCatch() {
        console.log("componentDidCatch app");
        this.setState({hasError: true});
    }

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };


    render() {
        const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

        if(this.state.hasError){
            return <ErrorIndicator/>
        }
        return(
            <div className="app">
                <Header/>
                {planet}
                    <button className="toggle-planet btn btn-warning btn-lg"
                            onClick={this.toggleRandomPlanet}>Toggle Random Planet</button>
                    <ErrorButton/>
                    <PeoplePage/>
            </div>
        );
    }
};

