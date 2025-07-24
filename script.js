document.addEventListener('DOMContentLoaded', (event) =>{
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event){
        event.preventDefault();

        const usernameInput = document.getElementById('username').value.trim();
        const emailInput = document.getElementById('email').value.trim();
        const passwordInput = document.getElementById('password').value.trim();

        let isValid = true;

        let messages = [];

        if (usernameInput.length < 3){
            isValid = false;
            messages.push("Username must be more than 3 characters long");
        }

        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput)){
            isValid = false;
            messages.push("Invalid email");
        }

        if (passwordInput.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long');
        }

        feedbackDiv.style.display = "block";

        if (isValid == true) {
            feedbackDiv.textContent = "Registration Successful";
            feedbackDiv.style.color = "#28a745";
        }else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        };

        //form.submit();

    })
})