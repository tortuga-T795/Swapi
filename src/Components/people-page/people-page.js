import React, {Component} from 'react';
import './people-page.css';
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/swapi-service";
import Row from "../row/row";

export default class PeoplePage extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedPerson: 1,
            hasError: false
        }
    }

    swapiService = new SwapiService();

    componentDidCatch(error, errorInfo) {

        this.setState({hasError: true});
    }

    onPersonSelected=(selectedPerson)=>{
        this.setState({selectedPerson});
    };

    render() {

        if(this.state.hasError){
            return <ErrorIndicator/>
        }

        const itemList = <ItemList onItemSelected={this.onPersonSelected} getData={this.swapiService.getAllPeople}
                                   renderItem={({name, gender, birthYear})=> `${name} (${gender}, ${birthYear})`}/>;

        const personDetails = <PersonDetails personId={this.state.selectedPerson}/>;
        return (
            <div>
                <Row left={itemList} right={personDetails}/>
            </div>
        )
    }
}