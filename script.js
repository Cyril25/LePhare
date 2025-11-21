// Gestion du Menu Burger Mobile
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navLinksItems = document.querySelectorAll(".nav-links li a");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

// Fermer le menu quand on clique sur un lien
navLinksItems.forEach(item => {
    item.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
    });
});

// Animation Navbar au scroll (Optionnel pour effet transparent -> opaque)
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.padding = "10px 0";
        navbar.style.backgroundColor = "rgba(26, 43, 60, 1)"; // Opaque
    } else {
        navbar.style.padding = "15px 0";
        navbar.style.backgroundColor = "rgba(26, 43, 60, 0.95)"; // Semi-transparent
    }
});
