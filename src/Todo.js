import React from 'react';

function Todo(props) {
    return (
        <li>
            <h1 onClick={() => props.markComplete(props.index)} style={props.isClicked ? { textDecoration: "line-through" } : { textDecoration: "none" }}>{props.text}
                <button class="delete" onClick={() => props.deleteToDo(props.index)}>Delete</button>
            </h1>
        </li>
    )
}

export default Todo;