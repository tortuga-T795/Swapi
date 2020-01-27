import React, {Component} from 'react';
import './people-page.css';
import ItemList from "../item-list/item-list";
import PersonDetails from "../item-details/item-details";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/swapi-service";
import Row from "../row/row";
import ErrorBoundry from "../error-boundry/error-boundry";

export default class PeoplePage extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedPerson: 1
        }
    }

    swapiService = new SwapiService();

    onPersonSelected=(selectedPerson)=>{
        this.setState({selectedPerson});
    };

    render() {

        if(this.state.hasError){
            return <ErrorIndicator/>
        }

        const itemList = (
            <ItemList onItemSelected={this.onPersonSelected} getData={this.swapiService.getAllPeople}>
                {(i) => (
                    `${i.name} (${i.birthYear})`
                )}
            </ItemList>
        );

        const personDetails = (
            <ErrorBoundry>
                <PersonDetails personId={this.state.selectedPerson}/>
            </ErrorBoundry>
        );

        return (
            <Row left={itemList} right={personDetails}/>
        );
    }
}