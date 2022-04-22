#
login# start_btn# stop_btn# replay_btn

function validateProfile() {

    // UserName Validation
    if (userName.value.trim() === "" || userName.value === null) {
        errorUserName.style.display = "flex";
        errorUserName.textContent = "Name is required";
        error = true;
    } else if (userName.value.length < 5 || userName.value.length > 20) {
        errorUserName.style.display = "flex";
        errorUserName.textContent = "Name length between 5 and 20 characters";
        error = true;
    } else if (userName.value.includes(" ")) {
        errorUserName.style.display = "flex";
        errorUserName.textContent = "Name can´t have space";
        error = true;
    } else {
        errorUserName.style.display = "none";
        userData.username = userName.value;
        error = false;
    }