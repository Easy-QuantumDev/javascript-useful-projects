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


add_expense_btn.addEventListener("click", () => {

    expense_form.classList.add("show")

})

let expenses_li = []


expense_form_element.addEventListener("submit", (e) => {


    e.preventDefault()

    const name = expense_name.value

    const amount = Number(expense_amount.value)

    const category = expense_category.value

    const date = expense_date.value

    const expense = {
        name: name,
        amount: amount,
        category: category,
        date: date,

    }

  

    let transaction = document.createElement("div")

    transaction.classList.add("transaction")


    let transaction_info = document.createElement("div")



    transaction_info.classList.add("transaction-info")




    let strong = document.createElement("strong")

    strong.textContent = name

    transaction_info.appendChild(strong)

    let span_time_category = document.createElement("span")

    let cat_date = `category : ${category} , date : ${date}`

    span_time_category.textContent = cat_date

    transaction_info.appendChild(span_time_category)


    let transaction_icon = document.createElement("div")

    transaction_icon.classList.add("transaction-icon")





    let amount_strong = document.createElement("strong")


    amount_strong.textContent = `$${amount}`
    amount_strong.classList.add("amount", 'expense')

    let icon_element = document.createElement("i")

    if (category == 'food') {
        icon_element.classList.add("fa-solid" ,"fa-utensils")

    } else if (category == 'bills') {
        icon_element.classList.add("fa-solid" ,"fa-file-invoice-dollar")


    } else if (category == 'shopping') {
        icon_element.classList.add("fa-solid" ,"fa-bag-shopping")


    } else if (category == 'income') {
        icon_element.classList.add('fa-solid" ,"fa-money-bill-wave')


    } else if (category == 'transport') {
        icon_element.classList.add('fa-solid", "fa-car')
    }
    transaction_icon.appendChild(icon_element)

    transaction.appendChild(transaction_icon)
    
    transaction.appendChild(transaction_info)
    
    transaction.appendChild(amount_strong)
    
    
    transactions.appendChild(transaction)

    expenses_li.push(expense)

    let total_expences = expenses_li.reduce((t,e)=>{
        return t+e.amount
    },0)
    expenses.textContent = `$${total_expences}`



})




