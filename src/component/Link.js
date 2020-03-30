import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
//import '../App.css';
import PropTypes from 'prop-types'

const Link = ({ active, children, onClick }) => (
    <button
        onClick={onClick}
        disabled={active}
        style={{
            marginLeft: '4px'
        }}
    >
        {children}
    </button>
)

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link