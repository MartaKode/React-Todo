import React from 'react';

const Todo = props => {
// debugger 
    return(
        <div onClick={() => props.toggleTask(props.item.id)} 
        // className={`task ${props.item.completed ? "completed" : ""}`} 
        style={{textDecoration:`${props.item.completed ? 'line-through' : 'none'}`, 
        backgroundColor: `${props.item.completed ? '#d17d7c' : 'rgb(49, 41, 59, .8)'}`,
        cursor: 'pointer',
        color: `${props.item.completed ? '' : 'white'}`}}>
<p>{props.item.task}</p>
        </div>
    )
}

export default Todo;