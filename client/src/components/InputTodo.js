import React, {Fragment,useState} from 'react';

const InputTodo =()=>{
   const [discription,setDiscription] = useState("");

   const onSubmitForm= async(e)=>{
       e.preventDefault();
       try {
           const body = {discription};
           const SendTodo = await fetch("http://localhost:3001/todo", 
           {
                method:"POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(body) 
           }
       );
      

         window.location="/"; 
          

       } catch (error) {
           console.error(`message : ${error.message}`)
       }

       

   }
   
   
    return(
       <Fragment>

           <h1 className="text-center mt-5">Mizeck's Todo List</h1>
          <form className="d-flex mt-5" onSubmit={onSubmitForm}>
              
              <input type="text" placeholder="Enter Todo Here!!!" className="form-control" value={discription} onChange={(e)=> setDiscription(e.target.value)}/>
              <button className="btn btn-success">Add Todo</button>
          
          </form>
           
           
       
       </Fragment> 
     

    )
}
export default InputTodo;