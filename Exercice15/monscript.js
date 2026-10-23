const toggleBtn = document.getElementById("theme-toggle");


const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    toggleBtn.textContent = "Activer le Thème Clair";
} else {
    document.body.classList.remove("dark-theme");
    toggleBtn.textContent = "Activer le Thème Sombre";
}

toggleBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");

    // Vérifier si le mode sombre est actuellement actif
    if (document.body.classList.contains("dark-theme")) {
        toggleBtn.textContent = "Activer le Thème Clair";
        localStorage.setItem("theme", "dark"); // Sauvegarde dans le localStorage
    } else {
        toggleBtn.textContent = "Activer le Thème Sombre";
        localStorage.setItem("theme", "light"); // Sauvegarde dans le localStorage
    }
});