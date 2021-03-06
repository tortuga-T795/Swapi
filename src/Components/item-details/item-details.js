import React, {Component} from 'react';
import './item-details.css';
import SwapiService from "../../services/swapi-service";
import ErrorButton from "../error-button/error-button";

const Record=({item, field, label})=>{
  return(
      <li className="list-group-item">
          <span className="term">{label}</span>
          <span>{item[field]}</span>
      </li>
  );
};

export {
    Record
};

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
        this.updateItem();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate item");
        if(this.props.itemId !== prevProps.itemId){
            this.updateItem();
        }
    }

    swapiService = new SwapiService();

    updateItem() {
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
        const {children} = this.props;

        if(!item){
            return <span>Select a person from a list</span>;
        }

        const content = <ItemView item={item} image={image} children={children}/>;

        return(
            <div>
                {content}
            </div>
        )
    }
}

const ItemView=({item, image, children})=>{
    const {id, name, gender, birthYear, eyeColor} = item;

    return(
        <React.Fragment>
            <div className="item-details card">
                <img className="item-image" src={image} alt="item image error"/>
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(children, (child) => {
                                return React.cloneElement(child, {item});
                            })
                        }
                    </ul>
                    <ErrorButton/>
                </div>
            </div>
        </React.Fragment>
    )
};