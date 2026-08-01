const toggle = document.getElementById("theme-toggle");

console.log("Script Loaded");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggle.checked = true;
    console.log("Dark mode loaded from localStorage");
}

toggle.addEventListener("change", () => {
    console.log("Toggle clicked!");

    if (toggle.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
        console.log("Dark mode ON");
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
        console.log("Dark mode OFF");
    }
});