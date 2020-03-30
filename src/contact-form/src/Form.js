import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component} from 'react';
import Field from './Field';
import Button from './Button';
import axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            message: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        axios({
            method: "POST",
            url: "http://localhost:3002/send",
            data: this.state
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.data.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    }

    resetForm() {

        this.setState({ fname: '', lname: '', email: '', message: '' })
    }

    render() {
        return (
            <div className="App">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="form-group">
                        <label htmlFor="fname">First Name</label>
                        <input type="text" className="form-control" id="fname" value={this.state.fname} onChange={this.onFNameChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" className="form-control" id="lname" value={this.state.lname} onChange={this.onLNameChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    </div>
            </div>
        );
    }

    onFNameChange(event) {
        this.setState({ fname: event.target.value })
    }
    onLNameChange(event) {
        this.setState({ lname: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }
}

export default Form;