    let balance = document.getElementById("balance")
    let income = document.getElementById("income")
    let expenses = document.getElementById("expenses")
    let chart_filter = document.getElementById("chart-filter")
    let add_expense_btn = document.getElementById("add-expense-btn")
    let expense_form = document.getElementById("expense-form")
    let close_form = document.getElementById("close-form")
    let expense_form_element = document.getElementById("expense-form-element")
    let expense_name = document.getElementById("expense-name")
    let expense_amount = document.getElementById("expense-amount")
    let expense_category = document.getElementById("expense-category")
    let expense_date = document.getElementById("expense-date")
    let transactions = document.querySelector(".transactions")

    add_expense_btn.addEventListener("click",()=>{
    expense_form.classList.add("show")
})

let  expenses_li = [] 

expense_form_element.addEventListener("submit",(e)=>{
    e.preventDefault()
    const name = expense_name.value
    const amount = Number(expense_amount.value)
    const category = expense_category.value
    const date = expense_date.value
    const expense = {
        name:name,
        amount:amount,
        category:category,
        date:date,
        
    }
     expenses_li.push(expense)
    
})




