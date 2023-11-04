const Todo = require('../models/todo')

module.exports = {
    getTodos: async (req,res) =>{
        try{
            const todoItems = await Todo.getTodos()
            console.log(todoItems.rows)
            res.render('todo.ejs', {todos: todoItems.rows})
        }catch(err){
            console.log(err)
        }
    },

    addTodo: async (req, res) =>{
        try{
            await Todo.addTodo(req.body.todoItem)
            console.log('Todo has been added!')
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    }
}