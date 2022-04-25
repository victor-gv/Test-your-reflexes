//Dom Elements, 
const userName = document.getElementById("user_name");
const errorUser = document.ggetElementById("error_user");
const startBtn = document.getElementById("start_btn");
const rankingBtn = document.getElementById("ranking_btn");
const startGame = document.getElementById("start_game");
const stopBtn = document.getElementById("stop_btn");
const replayBtn = document.getElementById("replay_btn");

// Global Variables
const errorClass = errorUser.classList;
console.log(errorClass);
document.getElementById("startBtn").addEventListener("click", validateUsername);

function validateUsername(){
if(userName.value == "") {
let result = errorClass.toggle("error");
if (result == true) {
errorUser.textContent = "Invalid username";
}
} else {

}
}


