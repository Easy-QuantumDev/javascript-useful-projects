const password = document.getElementById("password")
const generate_btn = document.getElementById("generate")
const copy_btn = document.getElementById("copy")



const password_length    = document.getElementById("length")


const upper_case_opt = document.getElementById("uppercase")
const lower_case_opt = document.getElementById("lowercase")
const numbers_opt = document.getElementById("numbers")
const symbol_opt = document.getElementById("symbols")



const strength_text = document.getElementById("strength-text")



let upper_case = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let lower_case = upper_case.toLowerCase()
let number_char = '0123456789'
let symbols = '!@#$%^&*()_+{}[]<>?'


function GeneratePassword(){
    let chars = ''
    let result = ''
    if (upper_case_opt.checked){
        chars += upper_case
    }
    if (lower_case_opt.checked){
        chars += lower_case
    }
    if (numbers_opt.checked){
        chars += number_char
    }
    if (symbol_opt.checked){
        chars += symbols
    }
    if (chars.length==0){
        password.value = "select options please "
        return;
    }


    for (let i =0;i<password_length.value;i++){
        let random = Math.floor(Math.random()*chars.length)
        result += chars[random]
    }
    password.value = result
    check_strength(result)

}
function check_strength(pass){
    if (pass.length<8){
        strength_text.innerHTML = "Weak"
    }else if (pass.length<15){
        strength_text.innerHTML = "Medium"
        
    }else{
        
        strength_text.innerHTML = "Strong"
    }
}
copy_btn.addEventListener("click",()=>{
    navigator.clipboard.writeText(password.value)
    copy_btn.innerHTML = "Copied"
    setTimeout(()=>{
        copy_btn.innerHTML = "copy"
    },1500)
})
generate_btn.addEventListener("click",GeneratePassword)
