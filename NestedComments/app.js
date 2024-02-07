let mainComment = document.getElementById("comments-container")

mainComment.addEventListener("click",(e) => {
   let addCommentClicked = e.target.classList.contains("add-comment")
   let submitClicked = e.target.classList.contains("submit")
   let nearestComment = e.target.closest(".same-section")

   if(addCommentClicked) {
        const newDiv = createInput()
        nearestComment.appendChild(newDiv)

   }
   if (submitClicked) {
    let inputVal = document.getElementById("input-text")
    const inputValLength = inputVal.value.length
    if (!inputValLength) {
        return
    }
    console.log(inputValLength)
    const newDiv = createComment(inputVal.value)
    nearestComment.appendChild(newDiv)
    let inputnearest = e.target.closest(".input-section")
    inputnearest.setAttribute("class", 'display-none')
   }
})

let createInput = () => {
    let ele = document.createElement("div")
    ele.setAttribute("class", "input-section")
    ele.innerHTML = `<input id="input-text" type="text">
    <button class="submit">submit</button>`
    return ele
}

let createComment = (inputVal) => {
    let ele = document.createElement("div")
    ele.setAttribute("class", "card")
    ele.innerHTML = `<div class="comment">${inputVal}</div>
    <button class="add-comment"> Add Comment</button>`
    return ele
}