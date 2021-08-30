document.addEventListener("DOMContentLoaded", startInterface);

function startInterface() {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener("click", handleClick);
    })
}

function handleClick(event){
    let position = event.target.id;

    handleMove(position);
    if(gameOver){
        setTimeout(
            restartGame(), 10);

    }
    updateSquare(position);
}

function updateSquare(position){
    let squares = document.querySelectorAll(".square");

    if(board[position] != ""){
        squares[position].innerHTML = `<div class="${board[position]}"></div>`;
    }
}

function restartGame() {
    let h3 = document.querySelector(".winner");

    h3.innerHTML = `<div class="winner">O vencedor foi o jogador ${winname[player]}</div>`
    btnRestart.style.display = "flex";
}

function restarted() {
    btnRestart.style.display = "none";
    window.location.reload();
}

function drawn() {
    let h3 = document.querySelector(".winner");

    h3.innerHTML = "<div class='winner'>Empate</div>";
    btnRestart.style.display = "flex";
}
