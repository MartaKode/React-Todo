// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

const TodoList = props => {

    return(
        <div className='taskList'>
            {props.task.map(item=> (
                <Todo toggleTask={props.toggleTask} key={item.id} item={item}/>
            ))}

            <button onClick={props.clearCompleted}> Clear Completed</button>
        </div>
    )
}

export default TodoList;