import React, { Component } from 'react';
import './App.css';
import Todo from './todo';

class App extends Component {
  state = {
    todos: [
      {
        text: "laundry"
      },
      {
        text: "take a nap"
      }
    ],
    inputValue: ""
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const currentTodos = this.state.todos;
    const newObj = {};
    newObj.text = this.state.inputValue;
    const newTodos = [...currentTodos, newObj];
    this.setState({todos:newTodos})
    this.setState({inputValue: ""})
    
  }

  deleteTodo = (index) =>{
    const newTodos = this.state.todos;
    newTodos.splice(index, 1);
    this.setState({todos:newTodos})
  }

  render(){
    return (
      <div className="App">
        <h1>To Do List</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input 
            onChange={event => this.setState({inputValue:event.target.value})}
            type='text'
            value={this.state.inputValue}></input>
          </form>
          {this.state.todos.map((todo, index ) =>(
          <Todo
            text={todo.text}
            index={index}
            key={index}
            deleteTodo = {this.deleteTodo}
          />
        ))}
        </div>
       
      </div>
    );
  }
}

export default App;