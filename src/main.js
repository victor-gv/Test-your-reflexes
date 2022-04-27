//Dom Elements,
const userName = document.getElementById("user_name");
const errorUser = document.getElementById("error_user");
const startBtn = document.getElementById("start_btn");
const rankingMain = document.getElementById("ranking-main");
const rankingGame = document.getElementById("ranking-game");
const rankingFinish = document.getElementById("ranking-finish");
const displayRankingFinish = document.getElementById("display-ranking-finish");
const rankingBtnMain = document.getElementById("ranking_btn");
const rankingBtnGame = document.getElementById("ranking_btn_game");
const rankingBtnFinish = document.getElementById("ranking_btn_finish");
const backBtnMain = document.getElementById("back-btn-main");
const backBtnGame = document.getElementById("back-btn-game");
const backBtnFinish = document.getElementById("back-btn-finish");
const wrapperMain = document.getElementById("content-items");
const startGameWrapper = document.getElementById("start-game-wrapper");
const finishWrapper = document.getElementById("finish-wrapper")
const gameInstructions = document.getElementById("game-instructions");
const startGame = document.getElementById("start_game");
const stopBtn = document.getElementById("stop_btn");
const replayBtn = document.getElementById("replay_btn");
const mainPage = document.getElementById("main_page");
const gamePage = document.getElementById("game_page");
const getReady = document.getElementById("get_ready");
const ufo = document.getElementById("stop_btn");
const finishSection = document.getElementById("finish_section");
const userScore = document.getElementById("user_score");



// Global Variables
const errorClass = errorUser.classList;
    // Second page
let random = Math.random() * 10000;
    // Start and end of the timer
let startTimer;
let endTimer;
    // Define the timer variable
let timer;





//Event listeners
startBtn.addEventListener("click", loginPage);
startGame.addEventListener("click", gameStart);
ufo.addEventListener("click", stopGame);
replayBtn.addEventListener("click", replay);
    //Ranking functions
rankingBtnMain.addEventListener("click", showRankingMain);
rankingBtnGame.addEventListener("click", showRankingGame);
rankingBtnFinish.addEventListener("click", showRankingFinish);
    //Back functions
backBtnMain.addEventListener("click", backToMain);
backBtnGame.addEventListener("click", backToGame);
backBtnFinish.addEventListener("click", backToFinish);



// Create an array of objects to store the username and its score
let dataScore = [];




//Functions
// Main page
function loginPage() {
    //validate username
    if (userName.value.trim() === "" || userName.value == null || userName.value.includes(" ") || userName.value.length < 3 || userName.value.length > 10) {
        let result = errorClass.toggle("error");
        if (result == true) {
            errorUser.textContent = "*Invalid username: it must be between 3 and 10 characters, no spaces and no empty.";
        } else {
            errorUser.textContent = "";
        }
        //change page
    } else {
        //Store the username 
        errorUser.textContent = "";
        mainPage.style.display = "none";
        gamePage.style.display = "block";
        startGame.style.display = "inline-block";
    }
}


function gameStart() {
    startGame.style.display = "none";
    getReady.style.display = "block";
    gameInstructions.style.display = "none";
    rankingBtnGame.style.display = "none";

    setTimeout(function () {
        getReady.style.display = "none";
        ufo.style.display = "block";
        gamePage.style.cursor = "crosshair";
        // Create the start date
        startTimer = Date.now();
    }, 1)
}


//Game function
// Stop the game when the ufo is clicked
function stopGame() {
    ufo.style.display = "none";
    // Create the end date
    endTimer = Date.now();
    // Calculates the start and end to get the time in milliseconds
    timer = (endTimer - startTimer) / 1000;
    // Hide the game page and show the finish page
    gamePage.style.display = "none";
    finishSection.style.display = "block";
    rankingFinish.style.width = "40vw"
    // Show the score
    userScore.textContent = timer;

    //When the game is finished, store the username and its score in the dataScore array of the local storage. If there is already an object, create a new one inside the array.
    // dataScore = JSON.parse(localStorage.getItem("dataScore"));
    if (dataScore == null) {
        dataScore = [];
    }
    dataScore.push({
        name: userName.value,
        score: timer
    });
    localStorage.setItem("dataScore", JSON.stringify(dataScore));
    console.log(dataScore);

    //Get the data from the local storage and display it in the ranking page
    let data = JSON.parse(localStorage.getItem("dataScore"));
    data.forEach(item => {
        let p = document.createElement("p");
        p.textContent = item.name + ": " + item.score + "seconds";
        displayRankingFinish.appendChild(p);
    });
  
}


// Hide the finish page and show the main page
function replay() {
    finishSection.style.display = "none";
    mainPage.style.display = "flex";
    userName.value = "";
}


// Show the ranking page when the button is clicked
function showRankingMain() {
    wrapperMain.style.display = "none";
    rankingMain.style.display = "flex";
    rankingMain.style.width = "60vw"
    backBtnMain.style.visibility = "visible";

}

function showRankingGame() {
    startGameWrapper.style.display = "none";
    rankingGame.style.display = "flex";
    rankingGame.style.width = "60vw"
    rankingBtnGame.style.display = "none";
    backBtnGame.style.visibility = "visible";
}

function showRankingFinish() {
    finishWrapper.style.display = "none";
    rankingFinish.style.display = "flex";
    rankingFinish.style.width = "60vw"
    rankingBtnFinish.style.display = "none";
    backBtnFinish.style.visibility = "visible"

}

function backToMain() {
    wrapperMain.style.display = "block";
    rankingMain.style.display = "none";
}

function backToGame() {
    startGameWrapper.style.display = "block";
    rankingGame.style.display = "none";
    rankingBtnGame.style.display = "block";
}

function backToFinish() {
    finishWrapper.style.display = "block";
    rankingFinish.style.display = "none";
    rankingBtnFinish.style.display = "block";
}






//Viewport adapt function
// let vw = Math.max(document.documentElement.clientWidth);
// let scoreHidden = false;

// window.addEventListener("resize", viewport);

// function viewport() {
//     if (scoreHidden && vw > 1024) {
//         rankingMain.style.display = "flex";
//         scoreHidden = false;
//     } else if (vw < 1024) {
//         console.log(scoreHidden);
//         rankingMain.style.display = "none";
//     }
// }