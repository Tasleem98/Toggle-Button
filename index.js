let con = document.querySelector(".container")
let btn = document.querySelector("button")
let body = document.querySelector("body")
let toggle = document.querySelector("h1")

check = 0

btn.addEventListener("click",function() {
    if(check == 0) {
    // body.style.transition="2s all ease"
    toggle.style.color="black"
    btn.innerHTML="LIGHT MODE"
    btn.style.backgroundColor= "black"
    btn.style.color= "white"
    body.style.backgroundColor = "white"
    check = 1

    }else {
    toggle.style.color="white"
    btn.style.backgroundColor="white"
    btn.style.color= "black"
    btn.innerHTML="DARK MODE"
    body.style.backgroundColor = "black"
    check = 0
    }
})