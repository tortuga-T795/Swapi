import React, {Component} from 'react';
import './app.css';
import Header from "../app-header/header";
import RandomPlanet from "../random-planet/random-planet";
import ItemList from "../item-list/item-list";

export default class App extends Component{
    render() {
        return(
            <div>
                <Header/>
                <RandomPlanet/>
                <ItemList/>
            </div>
        );
    }
};

