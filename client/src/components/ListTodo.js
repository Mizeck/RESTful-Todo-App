
import React, {Fragment, useEffect, useState} from "react";
const ListTodos =()=>{
    const [todos, setTodos]= useState([]);
    const getTodos = async() =>{
       try {
            const response =  await fetch("http://localhost:3001/todo");
            const results = await response.json();
            setTodos(results);
            console.log(results);
       } catch (error) {
           console.error(`message : ${error.message}`);
       }};
   

    useEffect(()=>{
        getTodos();
    },[]); 
   
    console.log(todos);

    const ListData = todos.forEach( todo => 
            
            <tr>
                 <td key={todo.id}>{todo.discription}</td>
                 <td>Edit</td>
                 <td>Delete</td>
            </tr>
         );

    return(
        <Fragment>
            
    <h2>Todo List</h2>

    <table className="table mt-5 text-center">
                
      <thead>
        <tr>
          <th>Description</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
      {ListData}
      </tbody>
     
  </table>
        </Fragment>

    )
};  
export default ListTodos;