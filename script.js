document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".hidden");

    const scrollAnimation = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight * 0.8) {
                section.classList.add("show");
            }
        });
    };

    window.addEventListener("scroll", scrollAnimation);
    scrollAnimation(); // Pour montrer les sections visibles dès le départ
});
