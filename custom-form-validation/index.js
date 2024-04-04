function validation(form) {
    function removeError(input) {
        if (input.classList.contains("error")) {
            input.classList.remove("error");
            const errorLabel = input.parentNode.querySelector(".error-label");
            if (errorLabel) {
                errorLabel.remove();
            }
        }
    }

    function createError(input, text) {
        const parent = input.parentNode;
        const errorLabel = document.createElement("label");

        errorLabel.classList.add("error-label");
        errorLabel.textContent = text;

        input.classList.add("error");
        parent.append(errorLabel);
    }

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    
    function validateTelNumber(tel) {
        const regex = /^[+]?[0-9]{8,13}$/;
        return regex.test(tel);
    }

    function validatePassword(password) {
        const regex = /^[a-zA-Z0-9_-]{8,}$/;
        return regex.test(password);
    }

    let result = true;

    form.querySelectorAll("input").forEach((input) => {
        removeError(input);
        if (input.value.trim() == "") {
            createError(input, "Поле має бути заповнене");
            result = false;
        } else if (input.id === "email" && !validateEmail(input.value)) {
            createError(input, "Неправильний формат електронної пошти");
            result = false;
        } else if (input.id === "tel" && !validateTelNumber(input.value)) {
            createError(input, "Неправильний формат номера телефону");
            result = false;
        } else if (input.id === "password" && !validatePassword(input.value)) {
            createError(input, "Неправильний формат паролю");
        }
    });

    return result;
}

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    if (validation(this) == true) {
        alert("Форма заповнена вірно");
    }
});
