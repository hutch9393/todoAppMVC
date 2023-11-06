const pool = require('../config/database'); 

const Todo = {}

Todo.addTodo = async (item) =>{
    
   return await pool.query(`INSERT into todos(name, completed) VALUES($1, $2);`,[item, false]);
}

Todo.getTodos = async () =>{
    return await pool.query('SELECT * FROM todos;');
}

Todo.completeTodo = async (id) =>{
    return await pool.query('UPDATE todos SET completed=true WHERE id=$1;',[id])
}

Todo.unCompleteTodo = async (id) =>{
    return await pool.query('UPDATE todos SET completed=false where id=$1;',[id])
}

Todo.deleteTodo = async (id) =>{
    return await pool.query('DELETE FROM todos where id=$1',[id])
}

module.exports = Todo;