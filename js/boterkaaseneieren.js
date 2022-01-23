let players = [];
let cells = ["", "", "", "", "", "", "", "", ""];
let clickedCells = [];
let currentPlayer;
let playerNames = [];
let allCombs = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


window.onload = function () {

    cells = document.getElementsByTagName('td');
    players = [document.getElementById("speler1"), document.getElementById("speler2")];

    clickedCells = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    document.getElementById('gameButton').addEventListener('click', startGame);
};

function startGame() {
    document.getElementById('gameButton').removeEventListener('click', startGame);
    document.getElementById('gameButton').innerHTML = 'Reset';
    document.getElementById('gameButton').addEventListener('click', resetEverything);
    playerNames[0] = prompt('Naam speler O');
    playerNames[1] = prompt('Naam speler X');

    players[0].innerHTML = playerNames[0] + ' = O (Speler 1)';
    players[1].innerHTML = playerNames[1] + ' = X (Speler 2';

    currentPlayer = Math.floor(Math.random() * 2) + 1;
    document.getElementById('speler' + currentPlayer).style.color = 'plum';
    enableClicking();
}

function clickOnCell(event) {
    document.getElementById(event.target.id).removeEventListener('click', clickOnCell);
    if (currentPlayer === 1) {
        cells[event.target.id].innerHTML = 'O';
        document.getElementById('speler1').style.color = 'black';
        document.getElementById('speler2').style.color = 'plum';
        checkEnd();
        currentPlayer = 2;
    } else if (currentPlayer === 2) {
        cells[event.target.id].innerHTML = 'X';
        document.getElementById('speler1').style.color = 'plum';
        document.getElementById('speler2').style.color = 'black';
        checkEnd();
        currentPlayer = 1;
    }
}

function reset() {
    currentPlayer = Math.floor(Math.random() * 2) + 1;
    clickedCells = [];
    clearCells();
    setTimeout(function () {
        document.getElementById('speler' + currentPlayer).style.color = 'plum';
    }, 1000);
    enableClicking();
}

function resetEverything() {
    location.reload();
}

function enableClicking() {
    for (let i = 0; i < cells.length; i++) {
        document.getElementById(i).addEventListener('click', clickOnCell);
    }
}

function clearCells() {
    for (let i = 0; i < cells.length; i++) {
        document.getElementById(i).innerHTML = "";
    }
}

function checkEnd() {
    for (let i = 0; i < cells.length; i++) {
        clickedCells[i] = cells[i].innerHTML;

        for (let a = 0; a < allCombs.length; a++) {


            if (clickedCells[allCombs[a][0]] === "X" && clickedCells[allCombs[a][1]] === "X" && clickedCells[allCombs[a][2]] === "X") {
                alert('Winnaar is ' + playerNames[1] + ' - X');
                addPoints('X');
                break;
            } else if (clickedCells[allCombs[a][0]] === "O" && clickedCells[allCombs[a][1]] === "O" && clickedCells[allCombs[a][2]] === "O") {

                winner = playerNames[1];
                alert('Winnaar is ' + playerNames[0] + ' - O');
                addPoints('O');
                break;
            }
        }
        for (let b = 0; b < allCombs.length; b++) {
            if (!clickedCells.includes("")) {
                alert('Gelijk!');
                gameEnd();
                break;
            }
        }
    }

    function addPoints(winner) {
        if (winner === 'O') {
            document.getElementById("ps1").innerHTML++;
        } else if (winner === 'X') {
            document.getElementById("ps2").innerHTML++;
        }
        gameEnd();
    }

    function gameEnd() {
        let again = confirm('Nog een keer?');

        if (again === true) {
            reset()
        } else {
            resetEverything();
        }
    }
}
