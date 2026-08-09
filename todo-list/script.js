const add_task_input = document.getElementById("task-input")
const add_btn = document.getElementById("add-task")
const todo_list = document.getElementById("todo-list")

add_btn.addEventListener("click", () => {
    let li = document.createElement("li")
    const new_content = document.createTextNode(add_task_input.value)
    li.appendChild(new_content)
    todo_list.appendChild(li)
    
    const complete_btn = document.createElement("button")
    complete_btn.classList.add("todo-check")
    const complete_btn_content = document.createTextNode(`complete ?`)
    complete_btn.appendChild(complete_btn_content)
    
    //================================= 
    
    
    const delete_btn = document.createElement("button")
    delete_btn.classList.add("delete-btn");
    const delete_btn_content = document.createTextNode(`delete`)
    delete_btn.appendChild(delete_btn_content)


    //================================= 


    const edit_btn = document.createElement("button")
    edit_btn.classList.add("edit-btn");
    const edit_btn_content = document.createTextNode(`edit`)
    edit_btn.appendChild(edit_btn_content)
    
    
    li.appendChild(complete_btn)
    li.appendChild(delete_btn)
    li.appendChild(edit_btn)


    
})
