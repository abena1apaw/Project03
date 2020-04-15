import 'bootstrap/dist/css/bootstrap.min.css';
//import '../App.css';
import React from 'react'
import Footer from './Footer'
import SubmitTodo from '../containers/SubmitTodo'
import VisibleTodoList from '../containers/VisibleTodoList'


const ToDoApp= () => (
    
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
            <h1>To Do List</h1>
        <SubmitTodo />
        <VisibleTodoList />
        <Footer />
        </div>
        </div>
)

export default ToDoApp;