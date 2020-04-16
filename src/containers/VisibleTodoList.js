import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../component/TodoList'

const getVisibleTodos = (todos, filter) => {
    // eslint-disable-next-line 
    switch (filter) {
        case 'DISPLAY_ALL':
            return todos
        case 'DISPLAY_COMPLETED':
            return todos.filter(t => t.completed)
        case 'DISPLAY_INCOMPLETE':
            return todos.filter(t => !t.completed)
    }
}

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.getvisibilityFilter)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        }
    }
}

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default VisibleTodoList;