import React from 'react'

class TodoForm extends React.Component {
  state = {
    title: '',
  }

  onChange = (e) => {
    this.setState({title: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state.title)
    this.setState({title: ''})
  }

  render() {
    const {title} = this.state
    return (
      <div style={{width: '60%', margin: '0 auto'}}>
        <form onSubmit={this.onSubmit} style={{padding: 0}}>
          <input
            type='text'
            name='title'
            placeholder='Add your todo'
            value={title}
            onChange={this.onChange}
            style={{width: '80%', height: '48px', fontSize: '16px'}}
          />
          <button style={{width: '15%', height: '76px', fontSize: '16px'}}>Submit</button>
        </form>
      </div>
    )
  }
}

export default TodoForm