import { connect } from 'react-redux'
import '../App.css';
import { createVisibilityFilter } from '../actions'
import Link from '../component/Link'

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.getvisibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(createVisibilityFilter(ownProps.filter))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

