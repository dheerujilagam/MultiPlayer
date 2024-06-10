let cardList = ["cannonbolt", "diamondhead", "fourarms", "greymatter", "heatblast", "ripjaws", "stingfly", "upgrade", "waybig", "xlr8"]
let cardSet;
let board = [];
let rows = 4, cols = 5, card1Selected, card2Selected;

window.onload = function() {
    shuffleCards();
    startGame();
}

function shuffleCards() {
    cardSet = cardList.concat(cardList);
    console.log(cardSet);
    for (let i = cardSet.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardSet[i], cardSet[j]] = [cardSet[j], cardSet[i]];
    }
    console.log(cardSet);
}

function startGame() {
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < cols; c++) {
            let cardImg = cardSet.pop();
            row.push(cardImg);
            let card = document.createElement("img");
            card.id = r.toString() + "," + c.toString();
            card.src = cardImg + ".jpg"; 
            card.classList.add("card");
            card.addEventListener("click", selectCard);
            document.getElementById("board").append(card);
        }
        board.push(row);
    }
    console.log(board);
    setTimeout(hideCards, 1000);
}

function hideCards() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            let card = document.getElementById(r.toString() + ',' + c.toString());
            card.src = "back.png";
        }
    }
}

function selectCard() {
    if (this.src.includes("back")) {
        if (!card1Selected) {
            card1Selected = this;
            let coordinates = card1Selected.id.split(',');
            let r = parseInt(coordinates[0]);
            let c = parseInt(coordinates[1]);
            card1Selected.src = board[r][c] + ".jpg";
        } else if (!card2Selected && this != card1Selected) {
            card2Selected = this;
            let coordinates = card2Selected.id.split(',');
            let r = parseInt(coordinates[0]);
            let c = parseInt(coordinates[1]);
            card2Selected.src = board[r][c] + ".jpg";
            setTimeout(updateCards, 1000);
        }
    }
}

function updateCards() {
    if (card1Selected.src != card2Selected.src) {
        card1Selected.src = "back.png";
        card2Selected.src = "back.png";
    }
    card1Selected = null;
    card2Selected = null;
}

function resetGame() {
    document.getElementById("board").innerHTML = "";
    cardSet = cardList.concat(cardList);
    board = [];
    card1Selected = null;
    card2Selected = null;
    shuffleCards();
    startGame();
}