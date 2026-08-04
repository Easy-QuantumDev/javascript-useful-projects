let display = document.getElementById("display")
function add(value){
display.value += value
}
function clear_display(){
    display.value=""

}
function calculate( ){
    display.value = eval(display.value)
}