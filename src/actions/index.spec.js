import * as actions from './index'

describe('todo actions', () => {
    it('SubmitTodo should create SUBMIT_TODO action', () => {
        expect(actions.SubmitTodo('Use Redux')).toEqual({
            type: 'SUBMIT_TODO',
            id: 0,
            text: 'Use Redux'
        })
    })

    it('createVisibilityFilter should set CREATE_VISIBILITY_FILTER action', () => {
        expect(actions.createVisibilityFilter('active')).toEqual({
            type: 'CREATE_VISIBILITY_FILTER',
            filter: 'active'
        })
    })

    it('toggleTodo should create TOGGLE_TODO action', () => {
        expect(actions.toggleTodo(1)).toEqual({
            type: 'TOGGLE_TODO',
            id: 1
        })
    })
})

