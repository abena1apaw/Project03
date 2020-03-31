import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import * as ReactBootstrap from "react-bootstrap";
import {
    Link
} from "react-router-dom";

const Navbar = () => {
    //render() {
    return (
        <div>
            <ReactBootstrap.Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
                <ReactBootstrap.Navbar.Brand href="#home">Abena's Project 3</ReactBootstrap.Navbar.Brand>
                <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootstrap.Nav className="mr-auto">
                        <Link to ="./About">
                        <ReactBootstrap.Nav.Link href="#About">About</ReactBootstrap.Nav.Link>
                        </Link>
                        <Link to="./ToDoApp">
                            <ReactBootstrap.Nav.Link href="#ToDoApp">To Do List</ReactBootstrap.Nav.Link>
                        </Link>
                        <Link to="./Contactus">
                            <ReactBootstrap.Nav.Link href="#Contactus">Contact Us</ReactBootstrap.Nav.Link>
                            </Link>
                    </ReactBootstrap.Nav>

                </ReactBootstrap.Navbar.Collapse>
            </ReactBootstrap.Navbar>
        </div>
    );
}

export default Navbar;