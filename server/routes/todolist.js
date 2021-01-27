const router = require("express").Router();
const pool = require("../Model/connectionDb/db");

//get all todos
router.get("/", async(req,res)=>{
    try {
        const AllTodos = await pool.query("SELECT * FROM todo_list_table");
        res.send(AllTodos.rows[0]);
        
    } catch (error) {
        console.error(`message : ${error.message}`); 
    }
});


//creating a todo
router.post("/", async(req,res)=>{

    try {
       const {discription} = req.body;
       const newTodo = await pool.query("INSERT INTO todo_list_table (discription) VALUES($1)", [discription]);
       const AllTodos = await pool.query("SELECT * FROM todo_list_table");
       res.send(AllTodos);
     console.log(discription);
    } catch (error) {
       console.error(`message : ${error.message}`); 
    }

    
})


//get specific todo
router.get("/:id", async(req,res)=>{
    try {
        const {id} = req.params;
        const oneTodo = await pool.query("SELECT * FROM todo_list_table WHERE todo_id = ($1)", [id]);
        res.send(oneTodo); 
        
    } catch (error) {
        console.error(`message : ${error.message}`);  
    }
});
//update a todo information
router.put("/:id", async(req,res)=>{
   try {
       const {discription} = req.body;
       const {id} = req.params;
       const updateTodo = await pool.query("UPDATE todo_list_table SET discription = $1 WHERE todo_id = $2", [discription, id]);
     
       const AllTodos = await pool.query("SELECT * FROM todo_list_table");
       res.send(AllTodos);

       
   } catch (error) {
    console.error(`message : ${error.message}`);   
   }
});
// deleting a specific todo
router.delete("/:id", async(req,res)=>{
    try {
        const {id} = req.params;
        const deleteTodo = await pool.query("DELETE FROM todo_list_table WHERE todo_id = ($1)", [id]);
        res.send("deleting sucessfully!!")
      
    } catch (error) {
     console.error(`message : ${error.message}`);   
    }
 });



module.exports = router;

