import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

import './components/Todo.css'

const sampleArray = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      task: sampleArray,
    }
  }

  // ``````````Helper Methods: ```````````
  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      // id: new Date(),
      completed: false,
    }

    this.setState({
      task: [...this.state.task, newTask]
    })

  }

  toggleTask = taskID => {
    this.setState({
      task: this.state.task.map(item => {
        if (item.id === taskID) {
          return {
            ...item, completed: !item.completed
          }
        } else {
          return item;
        }
      })
    })

  }

  clearCompleted = () => {
    this.setState({
      task: this.state.task.filter(item=> {
       return item.completed === false
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask}/> 

        <TodoList 
        toggleTask={this.toggleTask} 
        task={this.state.task} 
        clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
