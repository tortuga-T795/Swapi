import React, {Component} from 'react';
import './person-details.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

export default class PersonDetails extends Component{

    constructor(props){
        console.log("constructor person");
        super(props);
        this.state = {
            person: {},
            loading: true,
            error: false
        }
    }

    componentDidMount() {
        console.log("componentDidMount person");
        this.updatePerson();
        this.interval = setInterval(this.updatePerson, 10000);
        //clearInterval(this.interval);
    }

    swapiService = new SwapiService();

    onPersonLoaded = (person)=>{
        this.setState({person, loading: false});
    };

    onError=(error)=>{
        this.setState({error: true, loading: false});
    };

    updatePerson=()=>{
        console.log("Update person");
        const id = Math.floor(Math.random() * 15) + 1;
        this.swapiService.getPerson(id).then(this.onPersonLoaded).catch(this.onError);
    };

    render() {
        console.log("render person");
        const {person, loading, error} = this.state;
        const hasData = !(loading || error);
        const spinner = loading ? <Spinner/> : null;
        const content = hasData ? <PersonView person={person}/> : null;
        const errorMessage = error ? <ErrorIndicator/> : null;

        return(
            <div className="person-details card">
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    }
}

const PersonView=({person})=>{
    const {id, name, gender, birthYear, eyeColor} = person;

    return(
        <React.Fragment>
            <img className="person-image" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="person image error"/>
            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Birth Year</span>
                        <span>{birthYear}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Eye Color</span>
                        <span>{eyeColor}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
};