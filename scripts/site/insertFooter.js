const footerHtml = `
  <ul>
    <li>
      Jean Michel Souchon
    </li>
    <li>
      <a href="contact.html">Me contacter </a>
    </li>
  </ul>
`;


  const [footer] = document.getElementsByTagName("footer");

  footer.innerHTML = footerHtml;

{/* <a href="mailto:jeanmichelsouchon83170@outlook.fr">Me contacter </a> */}