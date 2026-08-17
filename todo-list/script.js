const add_task_input = document.getElementById("task-input")
const add_btn = document.getElementById("add-task")
const todo_list = document.getElementById("todo-list")
const error_alert_message = document.getElementById("error-message")
const clear_completed_btn = document.getElementById("clear-completed")

let tasks = JSON.parse(
    localStorage.getItem("tasks")
) || [];

add_btn.addEventListener("click", () => {

    if (add_task_input.value.trim() === "") {
        error_alert_message.textContent = "please enter a task !"
        error_alert_message.style.display = "block"
        return
    }

    error_alert_message.style.display = "none"

    let li = document.createElement("li")
    let span = document.createElement("span")

    li.classList.add("todo-item")
    span.classList.add("todo-text")

    const task_content = document.createTextNode(add_task_input.value)

    span.appendChild(task_content)

    li.appendChild(span)
    todo_list.appendChild(li)


    const complete_btn = document.createElement("button")

    complete_btn.classList.add("todo-check")

    const complete_btn_content = document.createTextNode("complete")

    complete_btn.appendChild(complete_btn_content)


    const delete_btn = document.createElement("button")

    delete_btn.classList.add("delete-btn")

    const delete_btn_content = document.createTextNode("delete")

    delete_btn.appendChild(delete_btn_content)


    const edit_btn = document.createElement("button")

    edit_btn.classList.add("edit-btn")

    const edit_btn_content = document.createTextNode("edit")

    edit_btn.appendChild(edit_btn_content)


    li.appendChild(complete_btn)
    li.appendChild(delete_btn)
    li.appendChild(edit_btn)


    tasks.push({
        text: add_task_input.value,
        completed: false
    })

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    )


    delete_btn.addEventListener("click", () => {

        li.remove()

        tasks = tasks.filter(task => task.text !== span.textContent)

        localStorage.setItem(
            "tasks",
            JSON.stringify(tasks)
        )

    })


    complete_btn.addEventListener("click", () => {

        li.classList.toggle("completed")

        const task = tasks.find(
            task => task.text === span.textContent
        )

        if (task) {
            task.completed = li.classList.contains("completed")
        }

        edit_btn.disabled = li.classList.contains("completed")

        localStorage.setItem(
            "tasks",
            JSON.stringify(tasks)
        )

    })


    let input

    edit_btn.addEventListener("click", () => {

        if (edit_btn.textContent === "edit") {

            input = document.createElement("input")

            input.value = span.textContent

            span.replaceWith(input)

            input.classList.add("todo-text")

            edit_btn.textContent = "save"

        } else {

            const old_text = input.value

            const new_span = document.createElement("span")

            new_span.classList.add("todo-text")

            new_span.textContent = old_text

            const task = tasks.find(
                task => task.text === span.textContent
            )

            if (task) {
                task.text = old_text
            }

            input.replaceWith(new_span)

            span = new_span

            edit_btn.textContent = "edit"

            localStorage.setItem(
                "tasks",
                JSON.stringify(tasks)
            )

        }

    })


    add_task_input.value = ""


})

clear_completed_btn.addEventListener("click", () => {
    todo_list.remove()
})

let current_filter = 'all'

function all_tasks() {
    const all_task = todo_list.children;
    for (let task of all_task) {
        const is_completed = task.classList.contains("completed")
        if (current_filter === "all") {
            task.style.display = 'flex'
        }

        else if (current_filter === "active") {
            task.style.display = is_completed ? 'none' : "flex"
        }

         else if (current_filter === "completed") {
            task.style.display = is_completed ? 'flex' : 'none'
        }

    }
}
    let filter_buttons = document.querySelectorAll(".filter")
    filter_buttons.forEach(btn=>{
        btn.addEventListener('click',()=>{
            current_filter = btn.dataset.filter
             filter_buttons.forEach(bt=>{
            bt.classList.remove("active")
        })
        
         btn.classList.add("active")
         all_tasks()
            
        })
    }) 




