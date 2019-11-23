import React, {Component} from 'react';
import './people-page.css';
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import ErrorIndicator from "../error-indicator/error-indicator";

export default class PeoplePage extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedPerson: 1,
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {

        this.setState({hasError: true});
    }

    onPersonSelected=(id)=>{
        this.setState({selectedPerson: id});
    };

    render() {

        if(this.state.hasError){
            return <ErrorIndicator/>
        }

        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList onItemSelected={this.onPersonSelected}/>
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson}/>
                </div>
            </div>
        )
    }
}