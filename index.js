let hmScore = 0;
let homeScoreEl = document.getElementById("home-score");
let homeScoreBtn1 = document.getElementById("home-score-1");
let homeScoreBtn2 = document.getElementById("home-score-2");
let homeScoreBtn3 = document.getElementById("home-score-3");

let guestScoreEl = document.getElementById("guest-score");
let guestScore1 = document.getElementById("guest-score-1");
let guestScore2 = document.getElementById("guest-score-2");
let guestScore3 = document.getElementById("guest-score-3");
let guest = 0;
//let resetGst = document.getElementById("reset-guest-score");
//let reseHm = document.getElementById("reset-home-score" );

function increment1(){ // increases score by one
    hmScore += 1;
    homeScoreEl.textContent = hmScore;
}

function increment2(){ // increases score by two
    hmScore += 2;
    homeScoreEl.textContent = hmScore; 
}

function increment3(){ // increases score by three
    hmScore += 3;
    homeScoreEl.textContent = hmScore;
}

function add1(){ // increases score by one
    guest += 1;
    guestScoreEl.textContent = guest;
}

function add2(){ // increases score by two
    guest += 2;
    guestScoreEl.textContent = guest; 
}

function add3(){ // increases score by three
    guest += 3;
    guestScoreEl.textContent = guest;
}

/*function resetHomeScore(){
    hmScore = 0;
homeScoreEl.textContent = hmScore;
}

function resetGuestscore(){
    guest = 0;
    guestScoreEl.textContent = guest;
}*/