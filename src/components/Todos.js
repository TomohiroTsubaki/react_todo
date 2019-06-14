import React from 'react'
import TodoItem from './TodoItem'

class Todos extends React.Component {
  render() {
    const {todos} = this.props
    return (
      <div style={todoItemContainer}>
        {todos.map((todo, index) => {
          return (
            <TodoItem
              key={index}
              todo={todo}
              toggleCompleted={this.props.toggleCompleted}
              deleteTodo={this.props.deleteTodo}
            />
          )
        })}
      </div>
    )
  }
}

const todoItemContainer = {
  width: '60%',
  margin: '0 auto'
}

export default Todos
