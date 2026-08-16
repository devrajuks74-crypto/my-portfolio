// ========================================
// DARK / LIGHT MODE
// ========================================

const themeToggle =
    document.getElementById("theme-toggle");

const body =
    document.body;


// Check previously saved theme

const savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "dark") {

    body.classList.add("dark-mode");

    themeToggle.textContent = "☀️";

}


// Toggle theme

themeToggle.addEventListener("click", function () {

    body.classList.toggle("dark-mode");


    const isDark =
        body.classList.contains("dark-mode");


    if (isDark) {

        themeToggle.textContent = "☀️";

        localStorage.setItem(
            "theme",
            "dark"
        );

    } else {

        themeToggle.textContent = "🌙";

        localStorage.setItem(
            "theme",
            "light"
        );

    }

});
