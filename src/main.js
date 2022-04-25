//Dom Elements,
const userName = document.getElementById("user_name");
const errorUser = document.getElementById("error_user");
const startBtn = document.getElementById("start_btn");
const rankingBtn = document.getElementById("ranking_btn");
const startGame = document.getElementById("start_game");
const stopBtn = document.getElementById("stop_btn");
const replayBtn = document.getElementById("replay_btn");
const mainPage = document.getElementById("main_page");
const gamePage = document.getElementById("game_page");
const getReady = document.getElementById("get_ready");
const ufo = document.getElementById("stop_btn");



// Global Variables
const errorClass = errorUser.classList;

//Event listeners
startBtn.addEventListener("click", nextPage);


//Functions

// Main page
function nextPage() {
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

function gameStart() {
    startGame.style.display = "none";
    getReady.style.display = "block";
    setTimeout(function () {
        getReady.style.display = "none";
        ufo.style.display = "block";

    }, random)
}