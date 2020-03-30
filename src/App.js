import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import * as ReactBootstrap from "react-bootstrap";
import About from "./component/About";
import Contactus from './contact-form/src/App';
import Navbar from './component/Navbar';
import ToDoApp from './component/ToDoApp';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";                      


const NavBar = () => {    
    return (
        <div className="App">
            <Router>
            <Navbar />    
                    <Switch>
                    <Route path="/About" component={About}>
                            <About />
                        </Route>
                    <Route path="/ToDoApp" component={ToDoApp}>
                            <ToDoApp />
                        </Route>
                    <Route path="/Contactus" component={Contactus}>
                            <Contactus />
                        </Route>
                </Switch>
            </Router>
                </div>
        )    
        
    }
export default NavBar;

