import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import About from "./component/About";
import MemeApp from "./component/MemeApp";
import Navbar from "./component/Navbar";
import TodoApp from "./component/TodoApp";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/About" component={About}>
            <About />
          </Route>
          <Route path="/TodoApp" component={TodoApp}>
            <TodoApp />
          </Route>
          <Route path="/MemeApp" component={MemeApp}>
            <MemeApp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default NavBar;
