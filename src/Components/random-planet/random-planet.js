import React, {Component} from 'react';
import './random-planet.css';

export default class RandomPlanet extends Component{

    render() {
        return(
            <div className="random-planet jumbotron rounded">
                <img className="planet-image"
                     src="https://starwars-visualguide.com/assets/img/planets/5.jpg" alt="text"/>
                <h3 className="planet-name">Dagobah</h3>
            </div>

        );
    }
}