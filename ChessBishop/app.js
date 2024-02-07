let main = document.getElementById("main-div")
const allTDs = main.getElementsByTagName('td');

for (let a =0;a < 8; a++) {
    let row = document.createElement("tr")
    for (let b =0;b < 8; b++) {
        let column = document.createElement("td")
        column.classList.add("box")
        if ((a%2 === 0 && b%2 !== 0) || (b%2 === 0 && a%2 !== 0)) {
            column.classList.add("white")
        } else {
            column.classList.add("black")
        }
        column.setAttribute("data-index", `${a}-${b}`)
        row.appendChild(column)
    }
    main.appendChild(row)
}

main.addEventListener("click", (e) => {
    let index = e.target.dataset.index.split("-")
    let row = index[0]
    let column = index[1]
    hash = []
    hash.push(`${row}-${column}`)
    topLeft(row, column, hash);
    topRight(row, column, hash);
    bottomLeft(row, column, hash);
    bottomRight(row, column, hash);
    // console.log(hash)
    for (let a = 0 ; a<allTDs.length ; a++) {
        allTDs[a].classList.remove("blue")
    }
for (let a = 0 ; a<allTDs.length ; a++) {
    const ind = `${allTDs[a].closest("tr").rowIndex}-${allTDs[a].cellIndex}`
    if(hash.indexOf(ind) !== -1) {
        console.log(ind)
        allTDs[a].classList.add("blue")
    }
}
})
function topLeft(row, column, hash) {
    let i = row;
    let j = column;
    while(i >= 0 && j>=0) {
        hash.push(`${i}-${j}`)
        i--;
        j--;
    }
}
function topRight(row, column, hash) {
    let i = row;
    let j = column;
    while(i >= 0 && j<8) {
        hash.push(`${i}-${j}`)
        i--;
        j++;
    }
}
function bottomLeft(row, column, hash) {
    let i = row;
    let j = column;
    while(i < 8 && j>=0) {
        hash.push(`${i}-${j}`)
        i++;
        j--;
    }
}
function bottomRight(row, column, hash) {
    let i = row;
    let j = column;
    while(i < 8 && j< 8) {
        hash.push(`${i}-${j}`)
        i++;
        j++;
    }
}