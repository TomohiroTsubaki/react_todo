import React from 'react';
import './App.css';
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Have a lunch',
        completed: false,
      },
      {
        id: 2,
        title: 'Study JavaScript',
        completed: false,
      },
      {
        id: 3,
        title: 'Buid my own app',
        completed: true,
      },
    ]
  }

  toggleCompleted = (todoId) => {
    const {todos} = this.state
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed
      }
      return todo
    })
    this.setState({todos: updatedTodos})
  }

  deleteTodo = (todoId) => {
    const {todos} = this.state
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== todoId
    })
    this.setState({todos: updatedTodos})
  }

  addTodo = (title) => {
    const {todos} = this.state

    if (title === '') {
      return
    }
    const newTodo = {
      id: todos.length + 1,
      title: title,
      completed: false
    }
    todos.push(newTodo)
    this.setState({todos: todos})
  }

  render() {
    const {todos} = this.state
    return (
      <div className="App">
        <h1 style={{textAlign: 'center'}}>My Todo List</h1>
        <TodoForm addTodo={this.addTodo} />
        <Todos
          todos={todos}
          toggleCompleted={this.toggleCompleted}
          deleteTodo={this.deleteTodo}
        />
      </div>
    )
  }
}

export default App;
