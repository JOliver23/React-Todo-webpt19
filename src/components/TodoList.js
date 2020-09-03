// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const ToDoList = props => {
    return (
        <div className= 'todo-list-container'>
            <div className='list'>
            {props.todos.map(todo => (
                <Todo 
                    // toggler={props.toggleComplete}
                    key={todo.id}
                    todo={todo}
                />
            ))}
            </div>
            <button className='completed-btn'>Clear Completed Items</button>
        </div>
    )
};

export default ToDoList;