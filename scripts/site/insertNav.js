const navHTML = `
  <a href="index.html">
   Accueil
  </a>
  <a href="projet.html">
    Projets réalisé
  </a>
  <a href="experience.html">
    Expériences / Dimplômes
  </a>
  <a href="contact.html">
    Me Contacter
  </a>

  <hr/>

`;

function afficheNav(){
  const nav = document.createElement("nav");
  const script = document.scripts[document.scripts.length - 1];

  nav.innerHTML = navHTML;

  script.parentElement.insertBefore(nav, script);
}
afficheNav();


