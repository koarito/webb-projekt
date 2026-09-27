// Custom element för sajtens navigationsmeny (burger-meny på mobil)
class Navigation extends HTMLElement {
  // Körs när elementet läggs till i DOM:en
  connectedCallback() {
    this.innerHTML = this.navbarHtml();

    // Lyssnare på burger-knappen: togglar "active"-klass på knappen
    // och "open"-klass på nav-länkarna för att visa/dölja mobilmenyn
    const burger = this.querySelector(".burger");
    const navLinks = this.querySelector(".nav-links");

    burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      navLinks.classList.toggle("open");
    });
  }

  // Bygger upp navbarens HTML: logga, burger-knapp och menylänkar
  navbarHtml = () => `
       <nav class="navbar">
      <a class="logo" href="/index.html">Grupp 21</a>
      <button class="burger" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul class="nav-links">
        <li><a href="/subject-area.html">Ämnesområde</a></li>
        <li><a href="/challenge.html">Utmaning</a></li>
        <li><a href="/idea.html">Idé</a></li>
        <li><a href="/hypothesis.html">Hypotes</a></li>
      </ul>
    </nav>
    `;
}

// Registrerar komponenten så att <site-nav> kan användas i HTML
customElements.define("site-nav", Navigation);