import React, {Component} from 'react';
import './app.css';
import Header from "../app-header/header";
import RandomPlanet from "../random-planet/random-planet";
import ErrorButton from "../error-button/error-button";
import ErrorIndicator from "../error-indicator/error-indicator";
import PeoplePage from "../people-page/people-page";
import ItemList from "../item-list/item-list";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry/error-boundry";
import Row from "../row/row";
import ItemDetails from "../item-details/item-details";

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true,
        hasError: false
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const planet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null;

        const {getPerson, getStarship, getPersonImage, getStarshipImage} = this.swapiService;
        const personDatails = (<ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage}/>);
        const starShipDatails = (<ItemDetails itemId={5} getData={getStarship} getImageUrl={getStarshipImage}/>);

        return (
            <ErrorBoundry>
                <div className="stardb-app">
                    <Header />

                    <Row left={personDatails} right={starShipDatails}/>

                </div>
            </ErrorBoundry>
        );
    }
}


/*
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