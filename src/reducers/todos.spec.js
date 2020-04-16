import todos from './todos'
//import '../App.css';

describe('todos reducer', () => {
    it('should handle initial state', () => {
        expect(
            todos(undefined, {})
        ).toEqual([])
    })

    it('should handle SUBMIT_TODO', () => {
        expect(
            todos([], {
                type: 'SUBMIT_TODO',
                text: 'Run the tests',
                id: 0
            })
        ).toEqual([
            {
                text: 'Run the tests',
                completed: false,
                id: 0
            }
        ])

        expect(
            todos([
                {
                    text: 'Run the tests',
                    completed: false,
                    id: 0
                }
            ], {
                type: 'SUBMIT_TODO',
                text: 'Use Redux',
                id: 1
            })
        ).toEqual([
            {
                text: 'Run the tests',
                completed: false,
                id: 0
            }, {
                text: 'Use Redux',
                completed: false,
                id: 1
            }
        ])

        expect(
            todos([
                {
                    text: 'Run the tests',
                    completed: false,
                    id: 0
                }, {
                    text: 'Use Redux',
                    completed: false,
                    id: 1
                }
            ], {
                type: 'SUBMIT_TODO',
                text: 'Fix the tests',
                id: 2
            })
        ).toEqual([
            {
                text: 'Run the tests',
                completed: false,
                id: 0
            }, {
                text: 'Use Redux',
                completed: false,
                id: 1
            }, {
                text: 'Fix the tests',
                completed: false,
                id: 2
            }
        ])
    })

    it('should handle TOGGLE_TODO', () => {
        expect(
            todos([
                {
                    text: 'Run the tests',
                    completed: false,
                    id: 1
                }, {
                    text: 'Use Redux',
                    completed: false,
                    id: 0
                }
            ], {
                type: 'TOGGLE_TODO',
                id: 1
            })
        ).toEqual([
            {
                text: 'Run the tests',
                completed: true,
                id: 1
            }, {
                text: 'Use Redux',
                completed: false,
                id: 0
            }
        ])
    })

})

