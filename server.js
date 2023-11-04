const express = require('express'); 
const app = express(); 
const PORT = 4200; 
const pool = require('./config/database'); 
const homeRoutes = require('./routes/home.js');
const todoRoutes = require('./routes/todo.js');

app.use(express.static('public')); 
app.set('view engine', 'ejs'); 
app.use(express.urlencoded({extended: true}))
app.use(express.json()); 

app.use('/', homeRoutes);
app.use('/todos',todoRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`); 
})