let button = document.getElementById("button")
let modal = document.getElementById("modal")
button.addEventListener("click", (e) => {
    modal.classList.remove("display-none")
})
modal.addEventListener("click", (e) => {
    modal.classList.add("display-none")
})