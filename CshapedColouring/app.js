let main = document.getElementById("main-div");
let list = document.querySelectorAll(".box")
let arr = []
main.addEventListener("click", (e) => {
    let index = e.target.dataset.index
    console.log(list)
    arr.push(index)
        if(arr.length < 8) {
            list[index].classList.add("colour") 
       } 
       if (arr.length == 7) {
        let a = arr.shift()
        list[a].classList.remove("colour")
       }
})