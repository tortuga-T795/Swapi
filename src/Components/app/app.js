import React, {Component} from 'react';
import './app.css';
import Header from "../app-header/header";
import RandomPlanet from "../random-planet/random-planet";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry/error-boundry";
import Row from "../row/row";
import ItemDetails, {Record} from "../item-details/item-details";
import PeoplePage from "../people-page/people-page";
import ItemList from "../item-list/item-list";
import {PersonList, StarshipList, PlanetList, PersonDetails, PlanetDetails, StarshipDetails} from "../sw-components";

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true
    };

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

        const {getPerson, getStarship, getPersonImage, getStarshipImage, getAllPeople, getAllPlanets} = this.swapiService;
        const personDatails = (<ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage}>
            <Record field="gender" label="Gender"/>
            <Record field="birthYear" label="Birthday"/>
            <Record field="eyeColor" label="Eye Color"/>
        </ItemDetails>
        );

        const starShipDatails = (<ItemDetails itemId={5} getData={getStarship} getImageUrl={getStarshipImage}>
                <Record field="model" label="Model"/>
                <Record field="length" label="Length"/>
                <Record field="costInCredit" label="Cost"/>
        </ItemDetails>
        );

        return (
            <ErrorBoundry>
                <div className="stardb-app">
                    <Header />

                    <PersonDetails itemId={11}/>
                    <StarshipDetails itemId={9}/>
                    <PlanetDetails itemId={5}/>

                    <PersonList/>
                    <StarshipList/>
                    <PlanetList/>

                </div>
            </ErrorBoundry>
        );
    }
}

/*  отображение Person и StarShip
            <ErrorBoundry>
                <div className="stardb-app">
                    <Header />

                    <Row left={personDatails} right={starShipDatails}/>

                </div>
            </ErrorBoundry>


Other


                    { planet }

                    <div className="row mb2 button-row">
                        <button
                            className="toggle-planet btn btn-warning btn-lg"
                            onClick={this.toggleRandomPlanet}>
                            Toggle Random Planet
                        </button>
                        <ErrorButton />
                    </div>

                    <PeoplePage />
*/