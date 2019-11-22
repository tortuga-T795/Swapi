import React, {Component} from 'react';
import './random-planet.css';
import SwapiService from '../../services/swapi-service';
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

export default class RandomPlanet extends Component{
    constructor(){
        super();
        console.log("constructor");
        this.state = {
            planet: {},
            loading: true,
            error: false
        };
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 10000);
        //clearInterval(this.interval);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    swapiService = new SwapiService();

    onPlanetLoaded = (planet)=>{
        this.setState({planet, loading: false});
    };

    onError=(error)=>{
        this.setState({error: true, loading: false});
    };

    updatePlanet=()=>{
        console.log("Update");
        const id = Math.floor(Math.random() * 21) + 2;
        this.swapiService.getPlanet(id).then(this.onPlanetLoaded).catch(this.onError);
    };

    render() {
        console.log("render");
        const {planet, loading, error} = this.state;
        const hasData = !(loading || error);
        const spinner = loading ? <Spinner/> : null;
        const content = hasData ? <PlanetView planet={planet}/> : null;
        const errorMessage = error ? <ErrorIndicator/> : null;

        return(
            <div className="random-planet jumbotron rounded">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}

const PlanetView=({planet})=>{
    const {id, name, population, rotationPeriod, diameter} = planet;

    return(
        <React.Fragment>
            <img className="planet-image"
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet image error"/>
            <div>
                <h3>{name}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
};