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
    },

    completeTodo: async (req, res) =>{
        try{
            await Todo.completeTodo(req.body.completeID)
            console.log('Todo has been completed')
            res.json('Mark Complete')
        }catch(err){
            console.log(err)
        }
    },

    unCompleteTodo: async (req, res) =>{
        try{
            await Todo.unCompleteTodo(req.body.unCompleteID)
            console.log('Todo has been Un-Completed')
            res.json('Mark UnComplete')
        }catch(err){
            console.log(err)
        }
    },

    deleteTodo: async (req, res) =>{
        try{
            await Todo.deleteTodo(req.body.deleteID)
            console.log('Todo Deleted!')
            res.json('Todo Deleted')
        }catch(err){
            console.log(err)
        }
    }
}