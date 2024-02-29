const selected = document.querySelector(".selected");
const customSelectOptionsDropdown = document.querySelector(
    ".custom-select-option-dropdown"
);


selected.setAttribute("tabindex", "0");

const openSelect = () => {
    customSelectOptionsDropdown.classList.contains("active")
        ? customSelectOptionsDropdown.classList.remove("active")
        : customSelectOptionsDropdown.classList.add("active")
        ? selected.classList.add("rotate")
        : selected.classList.remove("rotate");
};

selected.addEventListener("click", openSelect);

selected.addEventListener("keydown", (e) => {
    const enter = e.key === "Enter";
    if (enter) {
        openSelect();
    }
});

const options = ["Option 1", "Option 2", "Option 3"];
console.log(options);

options.forEach((option) => {
    const li = document.createElement("li");
    li.classList.add("option");
    li.textContent = option;
    li.setAttribute("tabindex", "0");

    li.addEventListener("click", () => {
        selected.textContent = option;
    });

    li.addEventListener("keydown", (e) => {
        const enter = e.key === "Enter";
        const space = e.key === " ";
        const arrowUp = e.key === "ArrowUp";
        const arrowDown = e.key === "ArrowDown";

        if (enter || space ) {
            selected.textContent = option;
        }
        if (arrowUp) {
            prevOption
        }
        if (arrowDown) {

        }
    });

    customSelectOptionsDropdown.appendChild(li);
});
