import React from 'react';

class TodoForm extends React.Component{
    constructor() {
        super();
        this.state= {
            newTodoItem: ""
        }
    }
    render() {
        return (
            <form>
                <input 
                    type="text"
                    name="todo"
                    value="todo"
                    placeholder="what to-do?"
                />
                <button>Add</button>
            </form>
        )
    }

};

export default TodoForm;