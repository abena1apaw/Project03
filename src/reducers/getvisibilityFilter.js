import { getVisibilityFilters } from '../actions'
//import '../App.css';

const getvisibilityFilter = (state = getVisibilityFilters.DISPLAY_ALL, action) => {
    switch (action.type) {
        case 'CREATE_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}

export default getvisibilityFilter