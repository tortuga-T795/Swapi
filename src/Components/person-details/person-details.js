import React, {Component} from 'react';
import './person-details.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";
import ErrorButton from "../error-button/error-button";

export default class PersonDetails extends Component{

    constructor(props){
        console.log("constructor person");
        super(props);
        this.state = {
            person: {},
            loading: true
        }
    }

    componentDidMount() {
        console.log("componentDidMount person");
        this.updatePerson();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate person");
        if(this.props.personId !== prevProps.personId){
            this.setState({loading: true});
            this.updatePerson();
        }
    }

    swapiService = new SwapiService();

    onPersonLoaded = (person)=>{
        this.setState({person, loading: false});
    };

    updatePerson=()=>{
        console.log("Update person");
        const {personId} = this.props;
        if(!personId){
            return;
        }
        this.swapiService.getPerson(personId).then(this.onPersonLoaded);
    };

    render() {
        console.log("render person");
        const {person, loading} = this.state;
        if(!person){
            return <span>Select a person from a list</span>;
        }

        const hasData = !(loading);
        const spinner = loading ? <Spinner/> : null;
        const content = hasData ? <PersonView person={person}/> : null;

        return(
            <div className="person-details card">
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
                <ErrorButton/>
            </div>
        </React.Fragment>
    )
};