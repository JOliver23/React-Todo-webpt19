import React from 'react';
import ToDoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todo_items = [{
  task: "",
  complete: false,
  id: ""
}]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
        <ToDoList />
      </div>
    );
  }
}

export default App;
