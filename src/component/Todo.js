import React from 'react'
/* import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo } from "../actions"; */
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';

const Todo = ({ onClick, completed, text }) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text}
        
    </li>
     
   
)
function Todo(props) {

    const todos = props.todos;

    const Todo = ({ onClick, completed, text }) => (
return
        <div className="list" key={todo.key}>
            <p>
                <input type="text" id={todo.key} value={todo.text} onChange={(e) => {
                    props.setUpdate(e.target.value, todo.key)
                }} />

                <span>
                    <FontAwesomeIcon className="faicons" onClick={() => {
                        props.deleteItem(item.key)
                    }} icon="trash" />
                </span>
            </p>
        </div>
    })

    return <div>

        <FlipMove duration={300} easing="ease-in-out">
            {Todo}
        </FlipMove>
    </div>;
}

// export default ListItems;

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo
