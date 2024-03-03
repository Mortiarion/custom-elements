const customSelect = () => {
    const selected = document.querySelector(".selected");
    const optionDropdown = document.querySelector(
        ".custom-select-option-dropdown"
    );

    const optionsText = [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4",
        "Option 5",
        "Option 6",
    ];

    const openSelect = () => {
        optionDropdown.classList.add("active");
        selected.classList.add("rotate");
    };

    const closeSelect = () => {
        optionDropdown.classList.remove("active");
        selected.classList.remove("rotate");
    };

    selected.addEventListener("click", () => {
        selected.classList.contains("rotate") ? closeSelect() : openSelect();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeSelect();
        }
    });

    const createOptions = () => {
        const optionELements = [];

        optionsText.forEach((option, index) => {
            const li = document.createElement("li");
            li.textContent = option;
            li.className = "option";
            li.setAttribute("tabindex", "0");

            optionDropdown.appendChild(li);
            optionELements.push(li);

            li.addEventListener("click", () => {
                selected.textContent = option;
                closeSelect();
            });

            li.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    selected.textContent = option;
                    closeSelect();
                    selected.focus();
                }

                if (e.key === "ArrowUp") {
                    const prevOptionIndex =
                        index === 0 ? optionsText.length - 1 : index - 1;
                    optionELements[prevOptionIndex].focus();
                }

                if (e.key === "ArrowDown") {
                    const nextOptionIndex =
                        index === optionsText.length - 1 ? 0 : index + 1;
                    optionELements[nextOptionIndex].focus();
                }
            });

            selected.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    openSelect();
                }
            });
        });
    };

    createOptions();
};

customSelect();
