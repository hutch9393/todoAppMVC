const pool = require('../config/database'); 

const Todo = {}

Todo.addTodo = async (item) =>{
    
   return await pool.query(`INSERT into todos(name, completed) VALUES($1, $2);`,[item, false]);
}

Todo.getTodos = async () =>{
    return await pool.query('SELECT * FROM todos;');
}

module.exports = Todo;