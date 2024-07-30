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

let lineIDs = [["1", "2", "3", "4", "5", "6", "7"], ["8", "9", "10", "11", "12",   
    "13", "14"], ["15", "16", "17", "18", "19", "20", "21"], ["22", "23", "24", 
    "25", "26", "27", "28"], ["29", "30", "31", "32", "33", "34", "35"], ["36", 
    "37", "38", "39", "40", "41", "42"]];
let matrixColumns = 7;
let setSixIDs = [["1", "8", "15", "22", "29", "36"], ["2", "9", "16", "23", "30" 
    , "37"], ["3", "10", "17", "24", "31", "38"], ["4", "11", "18", "25", "32", 
    "39"], ["5", "12", "19", "26", "33", "40"], ["6", "13", "20", "27", "34",   
    "41"], ["7","14", "21", "28", "35", "42"], ["1", "9", "17", "25", "33", "41"      
    ], ["2", "10", "18", "26", "34", "42"], ["6", "12", "18", "24", "30", "36"], 
    ["7", "13", "19","25", "31", "37"]];     
let setFiveIDs = [["3", "11", "19", "27", "35"], ["5", "11", "17", "23", "29"],  
    ["8", "16", "24", "32", "40"], ["14", "20", "26", "32", "38"]];
let setFourIDs = [["4", "10", "16", "22"], ["4", "12", "20", "28"], ["15", "23", 
    "31", "39"], ["21", "27", "33", "39"]];
let elementID;

function updateCellValue() {    
    elementID = this.id;
    ++clickCounter;
    if (clickCounter % 2 != 0 && 
        document.getElementById("winnerIs").innerHTML === "" && clickCounter < 
            45) {
        let redCell = document.getElementById(elementID);
        redCell.style.background = "red";
    } else if (document.getElementById("winnerIs").innerHTML === "" && 
        clickCounter < 45) {
        let yellowCell = document.getElementById(elementID);
        yellowCell.style.background = "yellow";
    }     
    if (clickCounter >= 7) {
        matrixColumns = 7;       
        checkLine(lineIDs);
        matrixColumns = 6;
        checkLine(setSixIDs);
        matrixColumns = 5; 
        checkLine(setFiveIDs);
        matrixColumns = 4; 
        checkLine(setFourIDs);                
    }     
}

function checkLine(array) {
    for (let i = 0; i < array.length; ++i) {
        let matchPlayer1 = 0;
        let matchPlayer2 = 0;
        for (let j = 0; j < matrixColumns; ++j) {
            if (document.getElementById(array[i][j]).style.background === "red") 
                {
                ++matchPlayer1;
                matchPlayer2 -= matchPlayer2;               
            }
            if (document.getElementById(array[i][j]).style.background === 
                "yellow") {
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
        }
    }    
}