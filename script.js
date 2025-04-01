// // Effet de fondu au chargement
// document.addEventListener("DOMContentLoaded", () => {
//     document.body.style.opacity = 1;
// });

// // Animation au scroll
// window.addEventListener("scroll", () => {
//     let sections = document.querySelectorAll("section");
//     sections.forEach(section => {
//         let position = section.getBoundingClientRect().top;
//         let screenPosition = window.innerHeight / 1.2;

//         if (position < screenPosition) {
//             section.style.opacity = "1";
//             section.style.transform = "translateY(0)";
//         }
//     });
// });

// // Ajout d'une transition au scroll
// let sections = document.querySelectorAll("section");
// sections.forEach(section => {
//     section.style.transition = "opacity 1s ease-out, transform 1s ease-out";
//     section.style.opacity = "0";
//     section.style.transform = "translateY(50px)";
// });

window.onload = function() {
    // Animation pour la section "home"
    document.querySelector('.home').classList.add('animate-onload');
};

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('animate-on-scroll');
        }
    });
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}
