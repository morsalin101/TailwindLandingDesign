
const menuBtn = document.getElementById("menubtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenuBtn = document.getElementById("closeMenuBtn");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    document.body.classList.add("overflow-hidden");
});

closeMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    document.body.classList.remove("overflow-hidden");
});
