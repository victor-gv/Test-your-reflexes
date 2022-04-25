//Dom Elements,
const userName = document.getElementById("user_name");
const errorUser = document.getElementById("error_user");
const startBtn = document.getElementById("start_btn");
const rankingBtn = document.getElementById("ranking_btn");
const startGame = document.getElementById("start_game");
const stopBtn = document.getElementById("stop_btn");
const replayBtn = document.getElementById("replay_btn");



// Global Variables
const errorClass = errorUser.classList;
let error = false;

//Event listeners
startBtn.addEventListener("click", validateUsername);

//Functions
function validateUsername() {

    if (userName.value == "") {
        let result = errorClass.toggle("error");
        if (result == true) {
            errorUser.textContent = "*Invalid username: it must be between 3 and 10 characters.";
            error = true;
        } else {
            errorUser.textContent = "";
            error = false;
        }
    } else {
        errorUser.textContent = "";
        error = false;
    }
}
