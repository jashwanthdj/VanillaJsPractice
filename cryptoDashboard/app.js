let list = []
let doc = document.getElementById("main-container-div");
document.addEventListener("DOMContentLoaded", () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
        list = data
        for(let i=0; i<list.length ; i++) {
            doc.innerHTML+=`
            <div class="inner-div">
            <div class="image">
            </div>
            <div class="details">
                <div class="row">
                    <span>Name</span>
                    <span>Price</span>
                </div>
                <div class="row">
                    <span>sub</span>
                    <span>percentage</span>
                </div>
            </div>
        </div>`
        }
    })
})
