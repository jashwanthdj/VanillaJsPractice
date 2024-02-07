const gridContainer = document.getElementById("grid-container")
const winnerVal = document.getElementById("winner")
let obj = {}
let flag = false
gridContainer.addEventListener("click", (e) => {
    if(!obj[e.target.dataset.index]) {
        if(flag) {
            obj[e.target.dataset.index] = 'x'
            e.target.classList.add("cross-mark")
        }else {
            obj[e.target.dataset.index] = 'O'
            e.target.classList.add("o-mark")
        }
        if(checkWinner()) {
            winnerVal.innerText = `the winner is ${flag? 'O' : 'X'}`
            return 
        }
        flag = !flag
    }
})
function checkWinner() {
    const arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for(let ar of arr) {
        const[a, b, c] = ar
        if(obj[a] && obj[a] === obj[b] && obj[a] === obj[c]) {
            return true
        }
    }
    return false
}