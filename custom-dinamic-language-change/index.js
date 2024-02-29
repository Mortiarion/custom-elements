const languageButton = document.querySelector(".language-button");
const languageDropdown = document.querySelector(".language-dropdown");
const selectedLanguage = document.querySelector(".selected-language");

const ukrainianCheckbox = document.getElementById("lang-ua");

const englishCheckbox = document.getElementById("lang-en");

const dataLang = document.querySelectorAll("[data-lang]");

document.addEventListener("DOMContentLoaded", function () {
    const savedLanguage = localStorage.getItem("selectedLanguage");

    if (savedLanguage && (savedLanguage === "UA" || savedLanguage === "EN")) {
        selectedLanguage.textContent = savedLanguage;
        ukrainianCheckbox.checked = savedLanguage === "UA";
        englishCheckbox.checked = savedLanguage === "EN";
        changeLanguage(savedLanguage.toLowerCase());
    }
});

languageButton.addEventListener("click", function () {
    languageDropdown.classList.toggle("active");
});

ukrainianCheckbox.addEventListener("change", async function () {
    if (this.checked) {
        console.log("checked UA");
        selectedLanguage.textContent = "UA";
        englishCheckbox.checked = false;
        await changeLanguage("ua");
        localStorage.setItem("selectedLanguage", "UA");
    }
});

englishCheckbox.addEventListener("change", async function () {
    if (this.checked) {
        console.log("checked EN");
        selectedLanguage.textContent = "EN";
        ukrainianCheckbox.checked = false;
        await changeLanguage("en");
        localStorage.setItem("selectedLanguage", "EN");
    }
});

async function loadLanguageTexts(language) {
    const response = await fetch(`language-change-json/text-${language}.json`);
    const data = await response.json();
    console.log(data);
    return data;
}

async function changeLanguage(language) {
    const languageTexts = await loadLanguageTexts(language);
    dataLang.forEach((element) => {
        const key = element.getAttribute("data-lang");
        console.log(key);
        element.textContent = languageTexts[key];
    });
}
