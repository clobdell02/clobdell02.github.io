var aegisIndex = 1; 
var pantryIndex = 1;

window.addEventListener("load", function () {
    showSlides(aegisIndex)
    showPantry(pantryIndex)
}); 

function plusSlides(n) {
    showSlides(aegisIndex += n);
}

function plusPantry(n) {
    showPantry(pantryIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("aegisSlides");
    if (n > slides.length) { aegisIndex = 1 }
    if (n < 1) { aegisIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[aegisIndex - 1].style.display = "block";
}

function showPantry(n) {
    var i;
    var s = document.getElementsByClassName("pantry-slide");
    if (n > s.length) { pantryIndex = 1 }
    if (n < 1) { pantryIndex = s.length }
    for (i = 0; i < s.length; i++) {
        s[i].style.display = "none";
    }
    s[pantryIndex - 1].style.display = "block";
}