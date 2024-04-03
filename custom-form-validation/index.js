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

    let result = true;

    form.querySelectorAll("input").forEach((input) => {
        removeError(input);
        if (input.value.trim() == "") {
            createError(input, "Поле не заповнене");
            result = false;
        }
        if (input.type === "email" && !validateEmail(input.value)) {
            // createError(input, "Неправильний формат електронної пошти");
            result = false;
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
