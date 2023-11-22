const submitBtn = document.getElementById("submit-button");

const fnameMsg = document.getElementById("fnameMsg");

const nameRegex = /^(?=.*[a-zA-zא-ת]).{2,}/;
const emailRegex = /^(?=.*[a-zA-zא-ת]).{2,}/;

const check = (input) => {
    if (input.name === "fName") {
        !nameRegex.test(input.value) ?
            input.setCustomValidity("Please enter 2 character +") :
            input.setCustomValidity('');
        fnameMsg.textContent = input.validationMessage;
    }
    if (input.name === "lName") {
        !nameRegex.test(input.value) ?
            input.setCustomValidity("Please enter 2 character +") :
            input.setCustomValidity('');
        fnameMsg.textContent = input.validationMessage;
    }
}