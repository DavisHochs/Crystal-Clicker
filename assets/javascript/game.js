let crystal1 = 0;
let crystal2 = 0;
let crystal3 = 0;
let crystal4 = 0;
let hasWon = false;
let winCounter = 0;
let lossCounter = 0;
let computerValue = 0
let userTotal = 0;

function getRandomNumber(n) {
    let result = Math.floor(Math.random() * n);
    return result;
}







function game() {
   
    $('#crystal-1').on('click', function(){
        userTotal += crystal1;
        $('#user-score').text(userTotal);
        checkWin();
        
    });
    $('#crystal-2').on('click', function(){
        userTotal += crystal2;
        $('#user-score').text(userTotal);
        checkWin();
        
    });
    $('#crystal-3').on('click', function(){
        userTotal += crystal3;
        $('#user-score').text(userTotal);
        checkWin();
        
    });
    $('#crystal-4').on('click', function(){
        userTotal += crystal4;
        $('#user-score').text(userTotal);
        checkWin();
    });  
    
}


function startGame() {
    $('#user-score').html(userTotal);

    crystal1 = Math.floor((Math.random()*12)+1);
    
    crystal2 = Math.floor((Math.random()*12)+1);
    
    crystal3 = Math.floor((Math.random()*12)+1);
    
    crystal4 = Math.floor((Math.random()*12)+1);
    

    computerValue = Math.floor((Math.random()*100)+19);
    $('#winning-score').text(computerValue);
}

$(document).ready(function(){
    startGame();
});

function checkWin() {
    if (userTotal === computerValue) {
        alert('You win!');
        winCounter++;
        $('#win-counter').html(winCounter);
        reset();
    }
    else if (userTotal > computerValue) {
        alert('You lose!')
        lossCounter++;
        $('#loss-counter').html(lossCounter);
        reset();
    }
}

function reset() {
    userTotal = 0;
    crystal1 = 0;
    crystal2 = 0;
    crystal3 = 0;
    crystal4 = 0;

    startGame();
}

game();