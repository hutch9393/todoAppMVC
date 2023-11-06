completedTodo = document.querySelectorAll('.completed');
notCompletedTodo = document.querySelectorAll('.not-completed');
deleteTodoElement = document.querySelectorAll('.del');


Array.from(notCompletedTodo).forEach((el)=>{
    el.addEventListener('click',completeTodo)
})


Array.from(completedTodo).forEach((el)=>{
    el.addEventListener('click',unCompleteTodo)
})

Array.from(deleteTodoElement).forEach((el)=>{
    el.addEventListener('click', deleteTodo)
})

async function completeTodo(){
    const todoID = this.parentNode.dataset.id;
    try{
        const response = await fetch('todos/completeTodo', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                completeID: todoID
            })
        })

        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function unCompleteTodo(){
    const todoID = this.parentNode.dataset.id;
    try{
        const response = await fetch('todos/unCompleteTodo',{
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                unCompleteID: todoID
            })
        })
        
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function deleteTodo(){
    const todoID = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/deleteTodo',{
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                deleteID: todoID
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }

}