import React, { Component } from 'react';
import Header from './components/layouts/Header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import './App.css';

class App extends Component {
  state={
    todos:[
      {
        id: uuid.v4(),
      title:'Deploy Code',
      completed: false
      },
      {
        id: uuid.v4(),
<<<<<<< HEAD
      title:' Login Page',
=======
      title:' Login Page Auth',
>>>>>>> 1e55d4fa67f4302a6903a190af7105edc9512f26
      completed: false
      },
      {
        id: uuid.v4(),
      title:'Debug Code',
      completed: false
      }
    ]
  }
// Mark Complete
  markComplete = (id) =>{
    this.setState({ todos: this.state.todos.map(todo =>{
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
    })});
  }

  //Delete TODO
  delTodo = (id)=>{
    this.setState({todos:[...this.state.todos.filter(todo => todo.id !== id)]});
  }
  //Add Todo
  addTodo=(title) => {

    const newTodo ={
      id:uuid.v4(),
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]});
  }
  render() {
    return (
      <div className="App">
        <div className="container"> 
          <Header/>
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
