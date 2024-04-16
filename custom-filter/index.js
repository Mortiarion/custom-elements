const filter = () => {
    const filter = document.querySelector(".filter-input");

    filter.addEventListener("keyup", () => {
        const inputValue = filter.value.toLowerCase();
        const filterItems = document.querySelectorAll(".filter-list li");

        filterItems.forEach((item) => {
            const text = item.textContent.toLowerCase();

            text.includes(inputValue)
                ? (item.style.display = "list-item")
                : (item.style.display = "none");
        });
    });
};

// filter();

document.querySelector(".filter-input").addEventListener("keyup", (event) => {
    document.querySelectorAll(".filter-list li").forEach((item) => {
        item.textContent
            .toLowerCase()
            .includes(event.target.value.toLowerCase())
            ? (item.style.display = "list-item")
            : (item.style.display = "none");
    });
});
