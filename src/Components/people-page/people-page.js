import React, {Component} from 'react';
import './people-page.css';
import ItemList from "../item-list/item-list";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/swapi-service";
import Row from "../row/row";
import ErrorBoundry from "../error-boundry/error-boundry";
import ItemDetails from "../item-details/item-details";

export default class PeoplePage extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedPerson: 11
        }
    }

    swapiService = new SwapiService();

    onPersonSelected=(selectedPerson)=>{
        this.setState({selectedPerson});
    };

    render() {

        const itemList = (
            <ItemList onItemSelected={this.onPersonSelected} getData={this.swapiService.getAllPeople}>
                {(i) => (
                    `${i.name} (${i.birthYear})`
                )}
            </ItemList>
        );

        const personDetails = (
            <ErrorBoundry>
                <ItemDetails itemId={this.state.selectedPerson} />
            </ErrorBoundry>
        );

        return (
            <Row left={itemList} right/>
        );
    }
}