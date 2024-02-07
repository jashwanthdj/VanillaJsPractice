let addVal = document.getElementById("add")
let sub = document.getElementById("subtract")
let reset = document.getElementById("reset")
let numberDisplay = document.getElementById("numberDisplay")
let incrementNum = document.getElementById("inputVal")
let intialVal = 1

incrementNum.addEventListener("change", (e) => {
    intialVal = parseInt(e.target.value)
})
addVal.addEventListener("click", (e) => {
    const val = parseInt(numberDisplay.innerText)
    let total = val + parseInt(intialVal)
    numberDisplay.innerText = total
})
sub.addEventListener("click", (e) => {
    const val = parseInt(numberDisplay.innerText)
    let total = val - parseInt(intialVal)
    numberDisplay.innerText = total
})

reset.addEventListener("click", (e) => {
    intialVal = 1
    numberDisplay.innerText = 0
    incrementNum.value = 1
})