// Definierar en custom element-klass för sajtens banner
class Banner extends HTMLElement {
  // Körs automatiskt av webbläsaren när elementet läggs till i DOM:en
  connectedCallback() {
    const title = this.getAttribute("title") || document.title;

    // Rendera bannerns HTML-innehåll
    this.innerHTML = this.bannerHtml(title);
  }

  // role="banner" används för tillgänglighet (ARIA landmark)
  bannerHtml = (title) => `
        <header class="banner" role="banner">
            <h1 class="banner-title">${title}</h1>
        </header>
    `;
}

// Registrerar komponenten så att <site-banner> kan användas i HTML
customElements.define("site-banner", Banner);
