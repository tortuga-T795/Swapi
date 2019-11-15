import React, {Component} from 'react';
import './random-planet.css';
import SwapiService from '../../services/swapi-service';

export default class RandomPlanet extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: 2,
            namePlanet: null,
            population: null,
            rotationPeriod: null,
            diameter: null
        };
        this.updatePlanet();
    }

    swapiService = new SwapiService();

    updatePlanet(){
        const id = Math.floor(Math.random() * 21) + 2;
        this.swapiService.getPlanet(id).then((planet)=>{
            this.setState({
                id,
                namePlanet: planet.name,
                population: planet.population,
                rotationPeriod: planet.rotation_period,
                diameter: planet.diameter
            })
        })
    }

    render() {
        return(
            <div className="random-planet jumbotron rounded">
                <img className="planet-image"
                     src={`https://starwars-visualguide.com/assets/img/planets/${this.state.id}.jpg`} alt="text"/>
                <div>
                    <h3>{this.state.namePlanet}</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population</span>
                            <span>{this.state.population}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation Period</span>
                            <span>{this.state.rotationPeriod}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter</span>
                            <span>{this.state.diameter}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}