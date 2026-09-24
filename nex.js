const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const overlay = document.querySelector(".menu-overlay");
const galleryCards = document.querySelectorAll(".gallery-card");

hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
      overlay.classList.toggle("active");
  
});


galleryCards.forEach(function(card) {
    card.addEventListener("click", function() {
        card.classList.toggle("flipped");
    });
});