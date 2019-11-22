import React, {Component} from 'react';
import './app.css';
import Header from "../app-header/header";
import RandomPlanet from "../random-planet/random-planet";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";

export default class App extends Component{

    constructor(){
        super();
        this.state = {
            showRandomPlanet: true
        };
    }

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    render() {
        const planet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null;
        return(
            <div className="app">
                <Header/>
                {planet}
                <button className="toggle-planet btn btn-warning btn-lg"
                    onClick={this.toggleRandomPlanet}>Toggle Random Planet</button>
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails/>
                    </div>
                </div>
            </div>
        );
    }
};

