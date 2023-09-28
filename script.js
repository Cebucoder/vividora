// Get all input boxes and labels
const inputBoxes = document.querySelectorAll('.input-box');

// email validation error handler
let errLabel = document.getElementById('user-email');
let errInput = document.getElementById('email');

// username validation error handler
let errUserLabel = document.getElementById('user-label');
let errUserInput  = document.getElementById('username');

// password validation error handler
let errPassLabel = document.getElementById('user-pass');
let errPassLabel1 = document.getElementById('user-cpass');
let errPassInput = document.getElementById('password');
let errPassInput1 = document.getElementById('password-confirm');
 

// Add event listeners to each input box
inputBoxes.forEach((inputBox) => {
    const input = inputBox.querySelector('input');
    const label = inputBox.querySelector('label');

    const usernameError = inputBox.querySelectorAll('#user-label, #username');
    const emailError = inputBox.querySelectorAll('#user-email, #email');
    const passerror = inputBox.querySelectorAll('#password,#user-pass');
    const cpasserror = inputBox.querySelectorAll('#password-confirm,#user-cpass');

    input.addEventListener('focus', () => {
        inputBox.classList.add('focused');
        label.setAttribute('class','addcolor');


        usernameError.forEach((inputBox) => {
            inputBox.textContent = "username";
            inputBox.classList.remove('input-warning', 'label-warning');
        });

        emailError.forEach((inputBox) => {
            inputBox.textContent = "Email";
            inputBox.classList.remove('input-warning', 'label-warning');
        });

        passerror.forEach((inputBox) => {
            inputBox.textContent = "Password";
            inputBox.classList.remove('input-warning', 'label-warning');
        });

        cpasserror.forEach((inputBox) => {
            inputBox.textContent = "Password Confirmation";
            inputBox.classList.remove('input-warning', 'label-warning');
        });

    });
    input.addEventListener('blur', () => {
        inputBox.classList.remove('focused');
        label.removeAttribute('class','addcolor');

    });
});


// username validation

function userValidation(){
    let username = document.getElementById('username').value.toLowerCase();
    let same = Array = ['juan','juan1','daniel',''];

    if(!username){
        console.log("Empty username");
        errUserLabel.textContent = "Please input username!";
        errUserLabel.setAttribute('class','label-warning');
        errUserInput.setAttribute('class','input-warning');
        return false;

    }else if(same.includes(username)){
        console.log("username has already taken");
        errUserLabel.textContent = "username has alreday taken!";
        errUserLabel.setAttribute('class','label-warning');
        errUserInput.setAttribute('class','input-warning');
        return false;

    }else{
        console.log("unique username");
        return true;
    }
}

// email and pass matching validation 

function emailValidation(){
    let emailInput = document.getElementById('email').value;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(emailPattern.test(emailInput)){
        console.log("Valid email");
        return true;

    }else{
        console.log("Invalid email");
        errLabel.textContent = "Invalid Email!";
        errLabel.setAttribute('class','label-warning');
        errInput.setAttribute('class','input-warning');
        return false;

    }
}

function passwordValidation(){
    let pass = document.getElementById('password').value;


    let cpass = document.getElementById('password-confirm').value;

    if(!pass || !cpass){
        console.log("Password is empty");
        errPassLabel.textContent= "Please input password!";
        errPassLabel1.textContent= "Please input password Confirmation!";
        errPassLabel.setAttribute('class','label-warning');
        errPassLabel1.setAttribute('class','label-warning');
        errPassInput.setAttribute('class','input-warning');
        errPassInput1.setAttribute('class','input-warning');
        return false;

    }else if(pass === cpass){
        console.log("Match");
        return true;

    }else{
        console.log("Not Matched");
        errPassLabel.textContent= "Password did not matched!";
        errPassLabel1.textContent= "Password did not matched!";
        errPassLabel.setAttribute('class','label-warning');
        errPassLabel1.setAttribute('class','label-warning');
        errPassInput.setAttribute('class','input-warning');
        errPassInput1.setAttribute('class','input-warning');
        return false;
    }
}






function Signup(){
    const isUserValid = userValidation();
    const isEmailValid = emailValidation();
    const isPasswordValid = passwordValidation();

    if(!isUserValid || !isEmailValid || !isPasswordValid){
        console.log(isUserValid);
        console.log(isEmailValid);
        console.log(isPasswordValid);
        console.log('Not ready');


    }else{
        console.log('Ready to go');
        window.location.href = "../user/";
    }
}

