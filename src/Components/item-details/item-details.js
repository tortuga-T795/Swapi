import React, {Component} from 'react';
import './item-details.css';
import SwapiService from "../../services/swapi-service";
import ErrorButton from "../error-button/error-button";

export default class ItemDetails extends Component{

    constructor(props){
        console.log("constructor item");
        super(props);
        this.state = {
            item: null,
            image: null
        }
    }

    componentDidMount() {
        console.log("componentDidMount item");
        this.updatePerson();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate item");
        if(this.props.itemId !== prevProps.itemId){
            this.updatePerson();
        }
    }

    swapiService = new SwapiService();

    updatePerson() {
        console.log("Update item");
        const {itemId, getData, getImageUrl} = this.props;
        if(!itemId){
            return;
        }
        getData(itemId).then((item) => {
            this.setState({ item, image: getImageUrl(item) });
        });
    }

    render() {
        console.log("render item");
        const {item, image} = this.state;
        if(!item){
            return <span>Select a person from a list</span>;
        }

        const content = <ItemView item={item} image={image}/>;

        return(
            <div className="person-details card">
                {content}
            </div>
        )
    }
}

const ItemView=({item, image})=>{
    const {id, name, gender, birthYear, eyeColor} = item;

    return(
        <React.Fragment>
            <div className="person-details card">
                <img className="person-image" src={image} alt="person image error"/>
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
            </div>
        </React.Fragment>
    )
};