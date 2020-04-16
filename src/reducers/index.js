import { combineReducers } from 'redux'
//import '../App.css';
import todos from './todos'
import getvisibilityFilter from './getvisibilityFilter'

export default combineReducers({
    todos,
    getvisibilityFilter
})