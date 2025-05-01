// Fonction pour récupérer et afficher les articles du flux RSS
async function fetchRSS() {
    const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://www.jeuxactu.com/rss/ja.rss');
    const data = await response.json();

    // Sélectionner la div où les articles seront ajoutés
    const veilleDiv = document.querySelector('#veille');

    // Vérifier si des articles sont présents
    if (data.items && data.items.length > 0) {
        data.items.forEach(item => {
            // Créer la carte pour chaque article
            const card = document.createElement('div');
            card.classList.add('veille-card');
            
            // Ajouter le titre et le lien
            const title = document.createElement('h3');
            title.innerHTML = `<a href="${item.link}" target="_blank">${item.title}</a>`;
            card.appendChild(title);
            
            // Ajouter une description si disponible
            if (item.description) {
                const description = document.createElement('p');
                description.innerHTML = item.description;
                card.appendChild(description);
            }

            // Ajouter l'image si disponible
            if (item.enclosure && item.enclosure.url) {
                const img = document.createElement('img');
                img.src = item.enclosure.url;
                img.alt = item.title;
                card.appendChild(img);
            }

            // Ajouter la carte à la div "veille"
            veilleDiv.appendChild(card);
        });
    } else {
        veilleDiv.innerHTML = '<p>Aucun article disponible.</p>';
    }
}
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = 1;
    fetchRSS();

    const form = document.querySelector('#contact');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche le formulaire de se soumettre normalement

        // Récupère les valeurs des champs
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        // Crée le sujet et le corps du mail
        const subject = `Message de ${name} via le formulaire du Portfolio`;
        const body = `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

        // Crée un lien mailto avec les données du formulaire
        const mailtoLink = `mailto:jeanmichelsouchon83170@outlook.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Ouvre le client mail de l'utilisateur avec les données pré-remplies
        window.location.href = mailtoLink;
    });
});

// Animation au scroll
window.addEventListener("scroll", () => {
    let sections = document.querySelectorAll("section.scrolling");
    sections.forEach(section => {
        let position = section.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.2;

        if (position < screenPosition) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});

// Ajout d'une transition au scroll
let sections = document.querySelectorAll("section.scrolling");
sections.forEach(section => {
    section.style.transition = "opacity 1s ease-out, transform 1s ease-out";
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
});

