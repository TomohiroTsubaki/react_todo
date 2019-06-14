import React from 'react'

class TodoItem extends React.Component {
  getStyle = () => {
    return {
      display: 'flex',
      border: '1px solid #f4f4f4',
      fontSize: '24px',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
      height: '70px',
      lineHeight: '70px',
      justifyContent: 'flex-start',
      alignItems: 'center'
    }
  }

  render() {
    const {todo} = this.props
    return (
      <div style={this.getStyle()}>
        <div>
          <input type='checkbox' onChange={() => this.props.toggleCompleted(todo.id)} />
        </div>
        <p  style={{flexGrow: 2}}>{todo.title}</p>
        <button onClick={() => this.props.deleteTodo(todo.id)} style={btnStyle}>✖︎</button>
      </div>
    )
  }
}

const btnStyle = {
  backgroundColor: '#BB0000',
  color: '#fff',
  height: '30px',
  width: '30px',
  padding: '2px',
  borderRadius: '100%',
  cursor: 'pointer'
}


export default TodoItem
