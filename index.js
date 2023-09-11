let homeScoreEl = document.getElementById("home-score");
let visitingScoreEl = document.getElementById("visiting-score");

/*let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
let homeScoreBtnThree = document.getElementById("home-score-btn-3")*/

/*let visitingScoreBtnOne = document.getElementById("visiting-score-btn-1")
let visitingScoreBtnTwo = document.getElementById("visiting-score-btn-2")
let visitingScoreBtnThree = document.getElementById("visiting-score-btn-3")*/


/* Home Score Buttons */

function increaseHomeScoreOne () {
    homeScoreEl.textContent++;
}

function increaseHomeScoreTwo () {
   homeScoreEl.textContent = Number (homeScoreEl.textContent) + 2
}

function increaseHomeScoreThree () {
    homeScoreEl.textContent = Number (homeScoreEl.textContent) + 3
 }

/* Visitor Score Buttons */

 function increaseVisitingScoreOne () {
    visitingScoreEl.textContent++;
}

function increaseVisitingScoreTwo () {
   visitingScoreEl.textContent = Number (visitingScoreEl.textContent) + 2
}

function increaseVisitingScoreThree () {
    visitingScoreEl.textContent = Number (visitingScoreEl.textContent) + 3
 }

 /* Reset Button */

function resetScores(){
    visitingScoreEl.textContent = 0
    homeScoreEl.textContent = 0
}