import React from 'react'
import {Todoitem} from "./Todoitem";

export const Todos = (props) => {
    return (
        <div className="container">
           <h3 className="text-center my-3">To Do list</h3>
           {props.todos.length===0? "the list is empty": props.todos.map((todo)=>{
            return <Todoitem todo ={todo} key={todo.sno} onDelete={props.onDelete}/>
            })
        } 
        </div>
    )
}
