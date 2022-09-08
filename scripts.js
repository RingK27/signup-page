let password = document.getElementById("user_password");
let password_confirmation = document.getElementById("password_conf");
let errore_text = document.getElementById("error");
let submit_button = document.getElementById("submit-btn");

submit_button.addEventListener("click", submit_func);

function submit_func() {
    if (password.value != password_confirmation.value) {
        errore_text.innerText = "le password devono corrispondere";
        return;
    }
}

