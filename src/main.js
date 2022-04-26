//Dom Elements,
const userName = document.getElementById("user_name");
const errorUser = document.getElementById("error_user");
const startBtn = document.getElementById("start_btn");
const rankingMain = document.getElementById("ranking-main");
const rankingGame = document.getElementById("ranking-game");
const rankingFinish = document.getElementById("ranking-finish");
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


/* //Object for jSON
    let loginStorage = {
        user_name: "",
        score: ""
    };
    let json = JSON.stringify(loginStorage);
 */

   //Object for jSON
/* let loginStorage = {
    user_name: "",
    score: ""
};
let json = JSON.stringify(loginStorage); */ 

localStorage.setItem("highScores", []);



const scoreStorage = {
    user_name: userName.value,
    score: ""
};











// Global Variables
const errorClass = errorUser.classList;

//Event listeners
startBtn.addEventListener("click", loginPage);

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
        errorUser.textContent = "";
        mainPage.style.display = "none";
        gamePage.style.display = "block";
    }
}


// Second page
startGame.addEventListener("click", gameStart);
let random = Math.random() * 10000;
console.log(random);
// Start and end of the timer
let startTimer;
let endTimer;


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
    }, random)
}


//Game function
ufo.addEventListener("click", stopGame);

// Define the timer variable
let timer;

// Stop the game when the ufo is clicked
function stopGame() {
    ufo.style.display = "none";
    // Create the end date
    endTimer = Date.now();
    // Calculates the start and end to get the time in milliseconds
    timer = (endTimer - startTimer) / 1000;
    console.log(timer);
}



//Ranking functions
rankingBtnMain.addEventListener("click", showRankingMain);
rankingBtnGame.addEventListener("click", showRankingGame);
rankingBtnFinish.addEventListener("click", showRankingFinish);


function showRankingMain () {
    wrapperMain.style.display = "none";
    rankingMain.style.display = "flex";
    backBtnMain.style.display = "block";
}

function showRankingGame () {
    startGameWrapper.style.display = "none";
    rankingGame.style.display = "flex";
    backBtnGame.style.display = "block";
    rankingBtnGame.style.display = "none";
}

function showRankingFinish () {
    finishWrapper.style.display = "none";
    rankingFinish.style.display = "flex";
    backBtnFinish.style.display = "block";
    rankingBtnFinish.style.display = "none";
}




//Back functions
backBtnMain.addEventListener("click", backToMain);
backBtnGame.addEventListener("click", backToGame);
backBtnFinish.addEventListener("click", backToFinish);


function backToMain () {
    wrapperMain.style.display = "block";
    rankingMain.style.display = "none";
    backBtnMain.style.display = "none";
}


function backToGame () {
    startGameWrapper.style.display = "block";
    rankingGame.style.display = "none";
    backBtnGame.style.display = "none";
    rankingBtnGame.style.display = "block";
}

function backToFinish () {
    finishWrapper.style.display = "block";
    rankingFinish.style.display = "none";
    backBtnFinish.style.display = "none";
    rankingBtnFinish.style.display = "block";
}

