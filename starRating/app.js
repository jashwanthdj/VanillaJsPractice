import axios from 'axios'
let mainDiv = document.getElementById("main-div");
let list = document.querySelectorAll(".star")
let countVariable = document.getElementById("count")
let click =0;
mainDiv.addEventListener("click", (e) => {
    let val = e.target.dataset.index;

    for(let i=0; i<click;i++) {
        list[i].classList.remove("clicked")
    }
    for(let i=0; i<val;i++) {
        list[i].classList.add("clicked")
    }
    click = val;
    countVariable.innerText = `count ${val}`
})