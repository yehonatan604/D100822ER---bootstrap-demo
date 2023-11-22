const submitBtn = document.getElementById("submit-button");

const fnameMsg = document.getElementById("fnameMsg");
const lNameMsg = document.getElementById("lNameMsg");
const emailMsg = document.getElementById("emailMsg");
const phoneMsg = document.getElementById("phoneMsg");
const freeTextMsg = document.getElementById("freeTextMsg");

const nameRegex = /^(?=.*[a-zA-zא-ת]).{2,}/;
const emailRegex = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
const phoneRegex = /0[0-9]{1,2}-?\s?[0-9]{3}\s?[0-9]{4}/;
const freeTextRegex = /^(?=.*[a-zA-zא-ת]).{10,}/;

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
        lNameMsg.textContent = input.validationMessage;
    }
    if (input.name === "email") {
        !emailRegex.test(input.value) ?
            input.setCustomValidity("Please enter valid emali address") :
            input.setCustomValidity('');
        emailMsg.textContent = input.validationMessage;
    }
    if (input.name === "phone") {
        !phoneRegex.test(input.value) ?
            input.setCustomValidity("Please enter valid israeli phone") :
            input.setCustomValidity('');
        phoneMsg.textContent = input.validationMessage;
    }
    if (input.name === "freeText") {
        !freeTextRegex.test(input.value) ?
            input.setCustomValidity("Please enter 10 character +") :
            input.setCustomValidity('');
        freeTextMsg.textContent = input.validationMessage;
    }
    input.validity.valid ? input.style = "border-color: green" : input.style = "border-color: red"
}

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    let isValid = true;

    const arr = Object.entries(event.target.form);
    arr.forEach((item) => {
        console.log(item);
        if (!item[1].validity.valid) {
            isValid = false;
        }
    });
    if (isValid) {
        alert("thanks");
        window.location.reload();
    } else alert("please fill form correctly")
})