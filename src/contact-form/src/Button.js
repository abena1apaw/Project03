import React, { Component } from 'react';
import PropType from 'prop-types';



class Button extends Component {
    static propType ={
    Email: PropType.string.isRequired,
    formValues: PropType.shape({
        FirstName: PropType.string.isRequired,
        LastName: PropType.string.isRequired,
        Email: PropType.string.isRequired,
        Message: PropType.string.isRequired,
    }).isRequired,
};
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
        };
        this.logFormDataToConsole = this.logFormDataToConsole.bind(this);
    }
    logFormDataToConsole(event) {
        console.log('Form Values', this.props.formValues);
        this.setState({ isClicked: true});
    }
    render() {
      return (
            <button            
            disabled={this.state.isClicked}
            onClick={this.logFormDataToConsole}
            >
                Contact Us
                </button>
            );
        }
    }
export default Button;