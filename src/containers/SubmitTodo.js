import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
//import '../App.css';
import { connect } from 'react-redux'
import { SubmitTodo } from '../actions'

const submitTodo = ({ dispatch }) => {
    let input

    return (
        <div>
            <header>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(SubmitTodo(input.value))
                    input.value = ''
                }}
            >
                <input ref={node => (input = node)} />
                <button type="submit">Submit Todo</button>
            </form>
        
            </header>
            </div>
    )
}

export default connect()(submitTodo)

