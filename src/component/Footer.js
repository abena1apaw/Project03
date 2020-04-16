import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import '../App.css';
import FilterLink from '../containers/FilterLink'
import { getVisibilityFilters } from '../actions'

const Footer = () => (
    <div className="App">
        <span>Display Tasks: </span>
        <FilterLink filter={getVisibilityFilters.DISPLAY_ALL}>ALL</FilterLink>
        <FilterLink filter={getVisibilityFilters.DISPLAY_COMPLETED}>COMPLETED</FilterLink>
        <FilterLink filter={getVisibilityFilters.DISPLAY_INCOMPLETE}>INCOMPLETE</FilterLink>        
    </div>
)

export default Footer