// iniciar as variáveis

let board = ["", "", "", "", "", "", "", "", ""];
let player = 0;
let symbol = ["p1", "p2"];
let winname = ["1", "2"];
let gameOver = false;
let filledBoard = [];
let n = 0;

let btnRestart = document.querySelector(".restart-box");
btnRestart.style.display = "none";


function handleMove(position) {

    if (gameOver) {
        return;
    }

    if (board[position] === "") {
        board[position] = symbol[player];
        filledBoard.length++

        gameOver = isWin();

        if (!gameOver) {
            if (player == 0) {
                player = 1;
            } else {
                player = 0;
            }
        }
    }
    check();

    return gameOver;
}

function isWin() {
    let check =
        [[0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],]

    for (let i = 0; i < check.length; i++) {
        let seq = check[i];
        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];


        if(board[pos1] === board[pos2] && board[pos2] === board[pos3] && board[pos1] === board[pos3] && board[pos1] != ""){
            return true;
        }
    }
    return false;
}

function check(){
    if(filledBoard.length ===9){
        setTimeout(drawn(), 100);
    }
}

