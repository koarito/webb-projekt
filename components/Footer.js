// Custom element för sajtens gemensamma footer
class SiteFooter extends HTMLElement {
  // Körs när elementet läggs till i DOM:en
  connectedCallback() {
    this.innerHTML = this.footerHtml();
  }

  // Bygger upp footerns HTML: tre kolumner + copyright-rad
  footerHtml = () => `
        <footer class="site-footer">
            <div class="footer-col">
                <p class="footer-heading">Grupp 21</p>
                <p>WebbProjekt</p>
            </div>

            <!-- Sidkarta för navigering, aria-label ger tillgänglig namngivning -->
            <nav class="footer-col" aria-label="Sidkarta">
                <p class="footer-heading">Sidor</p>
                <ul>
                    <li><a href="/subject-area.html">Ämnesområde</a></li>
                    <li><a href="/challenge.html">Utmaning</a></li>
                    <li><a href="/idea.html">Idé</a></li>
                    <li><a href="/hypothesis.html">Hypotes</a></li>
                </ul>
            </nav>

            <div class="footer-col">
                <p class="footer-heading">Källor</p>
                <p><a href="references.html">Se referenslista</a></p>
            </div>

            <p class="footer-bottom">&copy; 2026 Grupp 21</p>
        </footer>
    `;
}

// Registrerar komponenten så att <site-footer> kan användas i HTML
customElements.define("site-footer", SiteFooter);