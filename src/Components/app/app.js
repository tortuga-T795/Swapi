import React, {Component} from 'react';
import './app.css';
import Header from "../app-header/header";
import RandomPlanet from "../random-planet/random-planet";
import ErrorButton from "../error-button/error-button";
import ErrorIndicator from "../error-indicator/error-indicator";
import PeoplePage from "../people-page/people-page";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import SwapiService from "../../services/swapi-service";

export default class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            showRandomPlanet: true,
            hasError: false
        };
    }

    swapiService = new SwapiService();

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
            <div className="stardb-app">
                <Header/>
                {planet}
                <div className="row mb2 button-row">
                    <button className="toggle-planet btn btn-warning btn-lg"
                            onClick={this.toggleRandomPlanet}>Toggle Random Planet</button>
                    <ErrorButton/>
                </div>

                <PeoplePage/>

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onPersonSelected} getData={this.swapiService.getAllPlanets}
                                  renderItem={({name, diameter})=> `${name} (${diameter})`}/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onPersonSelected} getData={this.swapiService.getAllStarships}
                                  renderItem={({name, model})=> `${name} (${model})`}/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>
            </div>
        );
    }
}

