const express = require('express');
const router = express.Router(); 
const todoController = require('../controllers/todos'); 

router.get('/',todoController.getTodos); 
router.post('/addTodo', todoController.addTodo);
router.put('/completeTodo', todoController.completeTodo)
router.put('/unCompleteTodo', todoController.unCompleteTodo)
router.delete('/deleteTodo', todoController.deleteTodo)

module.exports = router; 