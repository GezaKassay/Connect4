let clickCounter = 0;

function updateName() {
    ++clickCounter;
    if (clickCounter % 2 != 0) {
        document.getElementById("Player1").innerHTML = 
            document.getElementById("EnterName").value;        
    } else {
        document.getElementById("Player2").innerHTML = 
            document.getElementById("EnterName").value;        
    }
    document.getElementById("EnterName").value = "";
}

let cells = document.getElementsByClassName("col-1");

for (let i = 0; i < cells.length; i++) {
    cells[i].onclick = updateCellValue;
}

let lineIDs = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12",   
    "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", 
    "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", 
    "37", "38", "39", "40", "41", "42"];
let lineSets = 7;
let setSixIDs = ["1", "8", "15", "22", "29", "36", "2", "9", "16", "23", "30", 
    "37", "3", "10", "17", "24", "31", "38", "4", "11", "18", "25", "32", "39",
    "5", "12", "19", "26", "33", "40", "6", "13", "20", "27", "34", "41", "7",  
    "14", "21", "28", "35", "42", "1", "9", "17", "25", "33", "41", "2", "10", 
    "18", "26", "34", "42", "6", "12", "18", "24", "30", "36", "7", "13", "19",
    "25", "31", "37"];       
let setsSix = 6;
let setFiveIDs = ["3", "11", "19", "27", "35", "5", "11", "17", "23", "29", "8", 
    "16", "24", "32", "40", "14", "20", "26", "32", "38"];
let setsFive = 5;
let setFourIDs = ["4", "10", "16", "22", "4", "12", "20", "28", "15", "23", 
    "31", "39", "21", "27", "39", "33"];
let setsFour = 4;
let elementID;

function updateCellValue() {    
    elementID = this.id;
    ++clickCounter;
    if (clickCounter % 2 != 0 && 
        document.getElementById("winnerIs").innerHTML === "" && clickCounter < 45) {
        let redCell = document.getElementById(elementID);
        redCell.style.background = "red";
    } else if (document.getElementById("winnerIs").innerHTML === "" && 
        clickCounter < 45) {
        let yellowCell = document.getElementById(elementID);
        yellowCell.style.background = "yellow";
    }     
    if (clickCounter >= 7) {
        lineSets = 7;
        checkLine(lineIDs); 
        setsSix = 6;    
        checkSetSix(setSixIDs);
        setsFive = 5
        checkSetFive(setFiveIDs);
        setsFour = 4;
        checkSetFour(setFourIDs);        
    }     
}

function checkLine(array) {
    let matchPlayer1 = 0;
    let matchPlayer2 = 0;
    for (let i = 0; i < lineSets; ++i) {
        if (document.getElementById(array[i]).style.background === "red") {
            ++matchPlayer1;
            matchPlayer2 -= matchPlayer2;               
        }
        if (document.getElementById(array[i]).style.background === "yellow") {
            ++matchPlayer2;
            matchPlayer1 -= matchPlayer1;
        }
        if (matchPlayer1 === 4) {            
            document.getElementById("winnerIs").innerHTML = 
            document.getElementById("Player1").innerHTML + " WON!";           
        }
        if (matchPlayer2 === 4) {           
            document.getElementById("winnerIs").innerHTML = 
            document.getElementById("Player2").innerHTML + " WON!";
        }                          
        if (i === lineSets - 1 && i < lineIDs.length - 1 && 
            !(matchPlayer1 === 4 || matchPlayer2 === 4)) {
            matchPlayer1 = 0;
            matchPlayer2 = 0;
            lineSets += 7;
        }           
    }    
}

function checkSetSix(array) {
    let matchPlayer1 = 0;
    let matchPlayer2 = 0;
    for (let i = 0; i < setsSix; ++i) {
        if (document.getElementById(array[i]).style.background === "red") {
            ++matchPlayer1;
            matchPlayer2 -= matchPlayer2;               
        }
        if (document.getElementById(array[i]).style.background === "yellow") {
            ++matchPlayer2;
            matchPlayer1 -= matchPlayer1;
        }
        if (matchPlayer1 === 4) {            
            document.getElementById("winnerIs").innerHTML = 
            document.getElementById("Player1").innerHTML + " WON!";
        }
        if (matchPlayer2 === 4) {           
            document.getElementById("winnerIs").innerHTML = 
            document.getElementById("Player2").innerHTML + " WON!";
        }                          
        if (i === setsSix - 1 && i < setSixIDs.length - 1 && 
            !(matchPlayer1 === 4 || matchPlayer2 === 4)) {
            matchPlayer1 = 0;
            matchPlayer2 = 0;
            setsSix += 6;
        }           
    }    
}

function checkSetFive(array) {
    let matchPlayer1 = 0;
    let matchPlayer2 = 0;
    for (let i = 0; i < setsFive; ++i) {
        if (document.getElementById(array[i]).style.background === "red") {
            ++matchPlayer1;
            matchPlayer2 -= matchPlayer2;               
        }
        if (document.getElementById(array[i]).style.background === "yellow") {
            ++matchPlayer2;
            matchPlayer1 -= matchPlayer1;
        }
        if (matchPlayer1 === 4) {            
            document.getElementById("winnerIs").innerHTML = 
            document.getElementById("Player1").innerHTML + " WON!";
        }
        if (matchPlayer2 === 4) {           
            document.getElementById("winnerIs").innerHTML = 
            document.getElementById("Player2").innerHTML + " WON!";
        }                          
        if (i === setsFive - 1 && i < setFiveIDs.length - 1 && 
            !(matchPlayer1 === 4 || matchPlayer2 === 4)) {
            matchPlayer1 = 0;
            matchPlayer2 = 0;
            setsFive += 5;
        }           
    }
}

function checkSetFour(array) {
    let matchPlayer1 = 0;
    let matchPlayer2 = 0;
    for (let i = 0; i < setsFour; ++i) {
        if (document.getElementById(array[i]).style.background === "red") {
            ++matchPlayer1;
            matchPlayer2 -= matchPlayer2;               
        }
        if (document.getElementById(array[i]).style.background === "yellow") {
            ++matchPlayer2;
            matchPlayer1 -= matchPlayer1;
        }
        if (matchPlayer1 === 4) {            
            document.getElementById("winnerIs").innerHTML = 
            document.getElementById("Player1").innerHTML + " WON!";
        }
        if (matchPlayer2 === 4) {           
            document.getElementById("winnerIs").innerHTML = 
            document.getElementById("Player2").innerHTML + " WON!";
        }                          
        if (i === setsFour - 1 && i < setFourIDs.length - 1 && 
            !(matchPlayer1 === 4 || matchPlayer2 === 4)) {
            matchPlayer1 = 0;
            matchPlayer2 = 0;
            setsFour += 4;
        }           
    }
}