const N = 20;
const winRule = 5;
const DEFAULT_CELL_SIZE = 25;
const arr = new Array(N);
for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(N);
}
let xTurn = true;
reset();

document.getElementById("reset").addEventListener("click", reset);
document.addEventListener("click", function (event) {
    let target = event.target;
    let targetID = target.id;
    let x = parseInt(targetID.slice(4));
    let y = parseInt(targetID.slice(targetID.indexOf("c") + 4));
    let cell = document.getElementById(targetID); //`row-${x}-col-${y}`
    if (arr[x][y] === 0) {
        if (xTurn) {
            arr[x][y] = 1;
            cell.innerHTML = "x";
        } else {
            arr[x][y] = 2;
            cell.innerHTML = "o";
        }
        xTurn = !xTurn;
        console.log(arr)
        console.log(x, y, check(x, y));
        if (check(x, y)) {
            alert(((arr[x][y] === 1) ? "x" : "o") + " wins!")
        }
    }
})

function reset() {
    let table = ``;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            let top = i * DEFAULT_CELL_SIZE;
            let left = j * DEFAULT_CELL_SIZE;
            table += `<div id="row-${i}-col-${j}" class="text-center" `
                + `style = "position: absolute; `
                + `left: ${left}px; top:${top}px; `
                + `width: ${DEFAULT_CELL_SIZE}px; height: ${DEFAULT_CELL_SIZE}px; `
                // + `line-height: ${DEFAULT_CELL_SIZE}px; `
                // + `border: 1px solid black; `
                + `box-shadow: 
    1px 0 0 0 #888, 
    0 1px 0 0 #888, 
    1px 1px 0 0 #888,   /* Just to fix the corner */
    1px 0 0 0 #888 inset, 
    0 1px 0 0 #888 inset;"`
                + `>`
                + `</div>`;
            arr[i][j] = 0;
        }
    }
    // console.log(table);
    // console.log(document.getElementById("result").innerHTML);
    document.getElementById("result").innerHTML = table;
    console.log(document.getElementById("result").innerHTML);
    xTurn = true;
}

function check(i, j) {
    let max = arr.length;
    let count;
    //topLeft-middle-bottomEight
    count = 0;
    for (let k = 1 - winRule; k < winRule - 1; k++) {
        if ((i + k >= 0) && (j + k >= 0) && (i + k < max) && (j + k < max) && (i + k + 1 < max) && (j + k + 1 < max)) {
            if ((arr[i + k][j + k] === arr[i + k + 1][j + k + 1]) && (arr[i + k][j + k] > 0)) {
                count++;
                // console.log(arr[i + k][j + k],":",arr[i + k + 1][j + k + 1])
                // console.log(count)
            } else {
                count = 0;
            }
            if (count === winRule - 1) {
                return true;
            }
        }
    }
    //top-middle-bottom
    count = 0;
    for (let k = 1 - winRule; k < winRule - 1; k++) {
        // console.log("k: ",k)
        if ((i + k >= 0) && (i + k < max) && (i + k + 1 < max)) {
            // console.log(arr[i + k][j],":",arr[i + k + 1][j])
            if ((arr[i + k][j] === arr[i + k + 1][j]) && (arr[i + k][j] > 0)) {
                count++;
                // console.log()
                // console.log("count = ",count)
            } else {
                count = 0;
            }
            if (count === winRule - 1) {
                return true;
            }
        }
    }
    //topRight-middle-bottomLeft
    count = 0;
    for (let k = 1 - winRule; k < winRule - 1; k++) {
        // console.log("k: ",k)
        if ((i + k >= 0) && (j - k >= 0) && (i + k < max) && (j - k < max) && (i + k + 1 < max) && (j - k - 1 >= 0)) {
            // console.log(arr[i + k][j - k],":",arr[i + k + 1][j - k - 1])
            if ((arr[i + k][j - k] === arr[i + k + 1][j - k - 1]) && (arr[i + k][j - k] > 0)) {
                count++;
                console.log()
                // console.log("count = ",count)
            } else {
                count = 0;
            }
            if (count === winRule - 1) {
                return true;
            }
        }
    }
    //right-middle-left
    count = 0;
    for (let k = 1 - winRule; k < winRule - 1; k++) {
        console.log("k: ", k)
        if ((j + k >= 0) && (j + k < max) && (j + k + 1 < max)) {
            console.log(arr[i][j + k], ":", arr[i][j + k + 1])
            if ((arr[i][j + k] === arr[i][j + k + 1]) && (arr[i][j + k] > 0)) {
                count++;
                console.log()
                console.log("count = ", count)
            } else {
                count = 0;
            }
            if (count === winRule - 1) {
                return true;
            }
        }
    }
    // if ((i - 2 > 0) && (j - 2 > 0)) {
    //     if ((arr[i - 2][j - 2] === key) && (arr[i - 1][j - 1] === key)) {
    //         alert(true);
    //         return true;
    //     }
    // }
    // if ((i + 2 < arr.length) && (j + 2 < arr.length)) {
    //     if ((arr[i + 2][j + 2] === key) && (arr[i + 1][j + 1] === key)) {
    //         alert(true);
    //         return true;
    //     }
    // }
    // if ((i - 1 > 0) && (j - 1 > 0) && (i + 1 < arr.length) && (j + 1 < arr.length)) {
    //     if ((arr[i - 1][j - 1] === key) && (arr[i + 1][j + 1] === key)) {
    //         alert(true);
    //         return true;
    //     }
    // }
    return false;
}
