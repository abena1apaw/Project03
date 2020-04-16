let TodoId = 0
export const SubmitTodo = text => ({
    type: 'SUBMIT_TODO',
    id: TodoId++,
    text
})

export const createVisibilityFilter = filter => ({
    type: 'CREATE_VISIBILITY_FILTER',
    filter
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

export const getVisibilityFilters = {
    DISPLAY_ALL: 'DISPLAY_ALL',
    DISPLAY_COMPLETED: 'DISPLAY_COMPLETED',
    DISPLAY_INCOMPLETE: 'DISPLAY_INCOMPLETE'
}