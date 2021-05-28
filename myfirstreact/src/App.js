
import './App.css';
import Header from "./MyComponent/Header";
import {Todos} from "./MyComponent/Todos";
import {Footer} from "./MyComponent/Footer";
import {About} from "./MyComponent/About";
import {AddTodo} from "./MyComponent/AddTodo";
import React, {useState,useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


// javascript syntax extension
function App() {
  let inittodo;
  if(localStorage.getItem("todos")===null)
  {
     inittodo=[]

  }
  else{
    inittodo=JSON.parse(localStorage.getItem("todos"))
   
  }
  
  const onDelete=(todo)=>
  {
    console.log("i m on delete",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
    localStorage.getItem("todos")
    localStorage.setItem("todos",JSON.stringify(todos));
    
  

  }

  const addTodo=(title,desc)=>{
    console.log("i m adding todo",title,desc)
    let sno;
    if(todos.length===0){
      sno=0;
    }
    else{
    sno=todos[todos.length-1].sno+1}
    const myTodo={
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos,myTodo])
    console.log(myTodo);

  }
  const [todos,setTodos]=useState(inittodo)
  
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  
  }, [todos])

  return (
    <>
    <Router>
  <Header Title="My ToDo List" searchBar={false} />
  <Switch>
  <Route exact path="/" render={()=>{
    return(
    <>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    </>)
  }}>
          </Route>
          <Route path="/about">
            <About />
          </Route>

          
        </Switch>
  
  <Footer/>
  </Router>
    </>
  );
}

export default App;
