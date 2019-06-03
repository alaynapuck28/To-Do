import React from 'react';

function Todo(props){
    return(
        <div>
            <p onClick = {()=>props.deleteTodo(props.index)}>{props.text}</p>
        </div>
    )
}

export default Todo;