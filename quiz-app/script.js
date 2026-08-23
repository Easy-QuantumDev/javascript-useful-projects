const category_cards = document.querySelectorAll(".category-card")
const params = new URLSearchParams(window.location.search)
const category = params.get("category")
console.log(category)


