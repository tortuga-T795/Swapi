import React, {Component} from 'react';
import './error-button.css';

export default class ErrorButton extends Component{

    constructor(props){
        super(props);
        this.state = {
            renderError: false
        };
    }

    render() {
        console.log("error-button render");
        if(this.state.renderError){
            this.foo.bar = 0;
        }

        return(
            <button className="error-button btn btn-danger btn-lg"
                    onClick={()=>this.setState({renderError: true})}>
                    Throw Error
            </button>
        )
    }
}