import React from 'react';

class TodoForm extends React.Component{
    constructor() {
        super();
        this.state= {
            formTodo: ""
        }
    }
    handleChanges = e => {
        e.preventDefault();
        this.setState({
            formTodo: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.formTodo);
        
    };
    render() {
        return (
            <form>
                <input 
                    type="text"
                    name="todo"
                    value={this.state.addTask}
                    onChange={this.handleChanges}
                    placeholder="what to-do?"
                />
                <button>Add</button>
            </form>
        )
    }

};

export default TodoForm;