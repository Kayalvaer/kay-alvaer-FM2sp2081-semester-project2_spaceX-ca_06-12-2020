const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");

function validatingForm() {
    event.preventDefault();

    if (firstName) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }

    if (checkLength(subject.value, 10)) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (validateEmail(email.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(address.value, 25)) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }

    console.log("code validated");
}
let form = document.getElementById("contactForm");
form.addEventListener("submit", validatingForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}